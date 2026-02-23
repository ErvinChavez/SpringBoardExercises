const express = require("express");

//express app
const app = express();

//resgister view engine
app.set("view engine", "ejs");

//listen for request
app.listen(3000);

app.get("/mean", (req, res) => {
  console.log(req);
  res.render("mean");
});

app.get("/median", (req, res) => {
  res.render("median");
});

app.get("/mode", (req, res) => {
  res.render("mode");
});

//404 page
app.use((req, res) => {
  res.status(404).render("404");
});
