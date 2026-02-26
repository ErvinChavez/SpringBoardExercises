const express = require("express");
const app = express();

global.items = [
  { name: popsicle, price: 1.45 },
  { name: cheerios, price: 3.4 },
];

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = items;
