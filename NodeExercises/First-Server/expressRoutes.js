const express = require("express");

const app = express();

app.get("/dogs", (req, res) => {
  console.log("YOU ASKED FOR THE DOGS!");
  console.log(req);
  res.send("<h1>I AM DOG WOOF WOOF</h1>");
});

app.listen(3000, () => {
  console.log("App on port 3000");
});
