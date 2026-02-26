const express = require("express");
const app = express();
const items = require("./routes/items");


app.use(express.json())
app.use("/items", items);
//use the items.js file to handle
//endpoints that start with /items

module.exports = app;


