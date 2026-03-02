require("dotenv").config();

const password = encodeURIComponent(process.env.DB_PASSWORD); // encodes @ to %40

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = `postgresql://postgres:${password}@localhost:5432/books_test`;
} else {
  DB_URI = `postgresql://postgres:${password}@localhost:5432/books`;
}

module.exports = { DB_URI };

//For Mac Users
// /** Common config for bookstore. */

// let DB_URI = `postgresql://`;

// if (process.env.NODE_ENV === "test") {
//   DB_URI = `${DB_URI}/books_test`;
// } else {
//   DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
// }

// module.exports = { DB_URI };
