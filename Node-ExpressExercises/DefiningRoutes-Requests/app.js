"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 4444;
const things = require("./routes/things");

app.use(ex[red])
app.use("/things", things);
//use the things.js file to handle
//endpoints that start with /things

app.get("/", (req, res) => {
    res.send("hello root")
});


// //you can use a route, if the files are using the same routes
// app
//   .route("/things/cars")
//   .get((req, res) => {})
//   .post((req, res) => {});

// app
//   .route("/things/cars/:carid", (req, res) => {})
//   .get((req, res) => {})
//   .post((req, res) => {});

app.listen(port, err => {
    if (err) {
        return console.log("ERROR",err);
    }
    console.log(`Listening on port ${port}`);
});

