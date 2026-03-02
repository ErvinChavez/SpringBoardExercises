/** Integration tests for /books routes */

process.env.NODE_ENV = "test"; // Use the test database

const request = require("supertest"); // Supertest allows HTTP requests to our Express app
const app = require("../app");        // Import the Express app
const db = require("../db");          // Import DB connection for setup/teardown

let book_isbn; // Will store the ISBN of a test book for use in GET/PUT/DELETE tests

/** Before each test: insert a sample book into the test database */
beforeEach(async () => {
  const result = await db.query(`
    INSERT INTO books 
      (isbn, amazon_url, author, language, pages, publisher, title, year)
    VALUES
      ('123432122', 'https://amazon.com/taco', 'Elie', 'English', 100, 'Nothing publishers', 'my first book', 2008)
    RETURNING isbn
  `);

  book_isbn = result.rows[0].isbn; // Save the ISBN to reference in other tests
});

/** POST /books */
describe("POST /books", function () {

  test("Creates a new book", async function () {
    // Send a valid book to POST /books
    const response = await request(app)
      .post("/books")
      .send({
        isbn: "32794782",
        amazon_url: "https://taco.com",
        author: "mctest",
        language: "english",
        pages: 1000,
        publisher: "yeah right",
        title: "amazing times",
        year: 2000
      });

    // Expect HTTP 201 Created
    expect(response.statusCode).toBe(201);
    // Expect the response to include the book object with an ISBN
    expect(response.body.book).toHaveProperty("isbn");
  });

  test("Prevents creating book without required title", async function () {
    // Send an invalid book (missing required field 'title')
    const response = await request(app)
      .post("/books")
      .send({ year: 2000 });

    // Expect HTTP 400 Bad Request due to schema validation
    expect(response.statusCode).toBe(400);
  });

  test("Prevents creating book with extra invalid field", async function () {
    // Send a book with an extra invalid field 'badField'
    const response = await request(app)
      .post("/books")
      .send({
        isbn: "4444",
        amazon_url: "https://example.com",
        author: "author",
        language: "english",
        pages: 50,
        publisher: "publisher",
        title: "title",
        year: 2023,
        badField: "DO NOT ADD ME!"
      });

    // Expect 400 due to additionalProperties=false in JSON Schema
    expect(response.statusCode).toBe(400);
  });
});

/** GET /books */
describe("GET /books", function () {
  test("Gets a list of 1 book", async function () {
    const response = await request(app).get("/books");
    const books = response.body.books;

    // Expect array of length 1 (from beforeEach)
    expect(books).toHaveLength(1);
    // Expect the book object to contain the correct fields
    expect(books[0]).toHaveProperty("isbn");
    expect(books[0]).toHaveProperty("amazon_url");
  });
});

/** GET /books/:isbn */
describe("GET /books/:isbn", function () {
  test("Gets a single book", async function () {
    const response = await request(app).get(`/books/${book_isbn}`);

    // Expect the book object to exist and have correct ISBN
    expect(response.body.book).toHaveProperty("isbn");
    expect(response.body.book.isbn).toBe(book_isbn);
  });

  test("Responds with 404 if book not found", async function () {
    // Try to GET a non-existent book
    const response = await request(app).get("/books/999");

    // Expect 404 Not Found
    expect(response.statusCode).toBe(404);
  });
});

/** PUT /books/:isbn */
describe("PUT /books/:isbn", function () {
  test("Updates a single book", async function () {
    // Send valid updated data
    const response = await request(app)
      .put(`/books/${book_isbn}`)
      .send({
        amazon_url: "https://taco.com",
        author: "mctest",
        language: "english",
        pages: 1000,
        publisher: "yeah right",
        title: "UPDATED BOOK",
        year: 2000
      });

    // Expect the book to be returned with updated title
    expect(response.body.book).toHaveProperty("isbn");
    expect(response.body.book.title).toBe("UPDATED BOOK");
  });

  test("Prevents updating ISBN or extra field", async function () {
    // Attempt to change ISBN and add invalid field
    const response = await request(app)
      .put(`/books/${book_isbn}`)
      .send({
        isbn: "32794782",
        badField: "DO NOT ADD ME!",
        amazon_url: "https://taco.com",
        author: "mctest",
        language: "english",
        pages: 1000,
        publisher: "yeah right",
        title: "UPDATED BOOK",
        year: 2000
      });

    // Expect 400 due to schema validation / disallowed ISBN change
    expect(response.statusCode).toBe(400);
  });

  test("Responds 404 if book not found", async function () {
    // Delete the book first
    await request(app).delete(`/books/${book_isbn}`);
    // Try to update deleted book
    const response = await request(app)
      .put(`/books/${book_isbn}`)
      .send({
        amazon_url: "https://taco.com",
        author: "mctest",
        language: "english",
        pages: 1000,
        publisher: "yeah right",
        title: "UPDATED BOOK",
        year: 2000
      });

    // Expect 404 Not Found
    expect(response.statusCode).toBe(404);
  });
});

/** DELETE /books/:isbn */
describe("DELETE /books/:isbn", function () {
  test("Deletes a single book", async function () {
    // Delete the test book
    const response = await request(app).delete(`/books/${book_isbn}`);

    // Expect a confirmation message
    expect(response.body).toEqual({ message: "Book deleted" });
  });

  test("Responds 404 if book not found", async function () {
    // Delete first to remove it
    await request(app).delete(`/books/${book_isbn}`);
    // Attempt to delete again
    const response = await request(app).delete(`/books/${book_isbn}`);

    // Expect 404 Not Found
    expect(response.statusCode).toBe(404);
  });
});

/** Cleanup DB after each test to maintain isolation */
afterEach(async function () {
  await db.query("DELETE FROM books");
});

/** Close DB connection after all tests complete */
afterAll(async function () {
  await db.end();
});