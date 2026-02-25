const express = require("express");
//import the functions of utils(mean, median, mode)
const { mean, median, mode } = require("./utils");
//import parseNumd function
const parseNums = require("./helpers/parseNums");
//import handleResponse function
const handleResponse = require("./helpers/handleResponse");

//express app
const app = express();

const path = require("path");

//resgister view engine
app.set("view engine", "ejs");
// ensures Express finds your EJS files
app.set("views", path.join(__dirname, "views"));

//mean route
//sets up GET route to /mean when request to like /mean?nums=1,2,3,4
app.get("/mean", (req, res) => {
  //call the helper function to validate the numbers
  const nums = parseNums(req, res);
  //stop the route if parseNums returns null
  if (!nums) return;
  // call the handleResponse function for operation as mean
  handleResponse(req, res, "mean", { value: mean(nums) });
});

//median route
app.get("/median", (req, res) => {
  //call the helper function to validate the numbers
  const nums = parseNums(req, res);
  //stop the route if parseNums returns null
  if (!nums) return;
  // call the handleResponse function for operation as median
  handleResponse(req, res, "median", { value: median(nums) });
});

//mode route
app.get("/mode", (req, res) => {
  //call the helper function to validate the numbers
  const nums = parseNums(req, res);
  //stop the route if parseNums returns null
  if (!nums) return;
  //call the handleResponse function for operation as mode
  handleResponse(req, res, "mode", { value: mode(nums) });
});

//all route
app.get("/all", (req, res) => {
  const nums = parseNums(req, res);
  if (!nums) return;
  // call the handleResponse function for all the operations
  handleResponse(req, res, "all", {
    mean: mean(nums),
    median: median(nums),
    mode: mode(nums),
  });
});

app.get("/test-view", (req, res) => {
  res.render("result", { response: { operation: "test", value: 123 } });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404");
});

console.log("Views folder path:", app.get("views"));

app.listen(3000, () => console.log("Server running on port 3000"));

//Springboard Solution:
