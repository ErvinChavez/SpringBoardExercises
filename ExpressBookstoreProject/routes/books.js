// Import JSON Schema validator
const { validate } = require("jsonschema");

// Import schemas for book creation and update
const bookSchemaNew = require("../schemas/bookSchemaNew.json");
const bookSchemaUpdate = require("../schemas/bookSchemaUpdate.json");

// Import Express and Book model
const express = require("express");
const Book = require("../models/book");

// Create a router instance for /books routes
const router = new express.Router();

/** GET / => {books: [book, ...]} 
 *  Returns a list of all books in the database
 */
router.get("/", async function (req, res, next) {
  try {
    // Fetch all books (can add query filters later)
    const books = await Book.findAll(req.query);
    // Respond with JSON containing an array of books
    return res.json({ books });
  } catch (err) {
    // Pass any errors to error-handling middleware
    return next(err);
  }
});

/** GET /:isbn => {book: book} 
 *  Returns a single book identified by its ISBN
 */
router.get("/:isbn", async function (req, res, next) {
  try {
    // Look up book by ISBN using the Book model
    const book = await Book.findOne(req.params.isbn);
    // Respond with JSON containing the book
    return res.json({ book });
  } catch (err) {
    // Forward errors (e.g., 404 if not found) to middleware
    return next(err);
  }
});

/** POST / => {book: newBook} 
 *  Creates a new book in the database
 */
router.post("/", async function (req, res, next) {
  try {
    // Validate request body against bookSchemaNew
    const validation = validate(req.body, bookSchemaNew);

    // If validation fails, return a 400 with errors
    if (!validation.valid) {
      return next({
        status: 400,
        errors: validation.errors.map(e => e.stack)
      });
    }

    // Create new book using validated data
    const book = await Book.create(req.body);
    // Return 201 Created with the new book object
    return res.status(201).json({ book });
  } catch (err) {
    // Forward any DB or server errors
    return next(err);
  }
});

/** PUT /:isbn => {book: updatedBook} 
 *  Updates an existing book's details (except ISBN)
 */
router.put("/:isbn", async function (req, res, next) {
  try {
    // Prevent updating the ISBN — it's immutable
    if ("isbn" in req.body) {
      return next({
        status: 400,
        message: "Not allowed to change ISBN"
      });
    }

    // Validate request body against bookSchemaUpdate
    const validation = validate(req.body, bookSchemaUpdate);
    if (!validation.valid) {
      return next({
        status: 400,
        errors: validation.errors.map(e => e.stack)
      });
    }

    // Update the book in the database
    const book = await Book.update(req.params.isbn, req.body);
    // Return the updated book object
    return res.json({ book });
  } catch (err) {
    // Forward errors (404 if book not found)
    return next(err);
  }
});

/** DELETE /:isbn => {message: "Book deleted"} 
 *  Deletes a book from the database by ISBN
 */
router.delete("/:isbn", async function (req, res, next) {
  try {
    // Remove the book from the DB
    await Book.remove(req.params.isbn);
    // Return confirmation message
    return res.json({ message: "Book deleted" });
  } catch (err) {
    // Forward errors (404 if book not found)
    return next(err);
  }
});

// Export router so it can be used in app.js
module.exports = router;