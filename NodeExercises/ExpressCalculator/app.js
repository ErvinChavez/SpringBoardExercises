const express = require("express");
//import the functions of utils(mean, median, mode)
const { mean, median, mode } = require("./utils");

//express app
const app = express();

//resgister view engine
app.set("view engine", "ejs");

//a helper function, that takes Express req and res
function parseNums(req, res) {
  //numsStr is the values of nums but in string since it's from req.query
  const numsStr = req.query.nums;
  //if there is no values of numbers
  if (!numsStr) {
    //return error code
    res.status(400).json({ error: "nums are required" });
    //return as null to exit
    return null;
  }
  //nums is the string of numbers split into an array
  //then map through each element in the array to check if it's a valid num
  const nums = numsStr.split(",").map((n) => {
    //if element is Not a Number(NaN)
    if (isNaN(n)) {
      //send a 400 error with a json saying this
      res.status(400).json({ error: `${n} is not a number.` });
      //return NaN as a placeholder
      return NaN;
    }
    //otherwise the element(number) is converted as a number in the array
    return Number(n);

    //By the end nums will be an array of numbers, or NaN values
  });

  //check if nums has any NaN values
  //if so stop processing by returning null
  if (nums.includes(NaN)) return null;
  //otherwise all numbers are valid numbers so return that array of nums
  return nums;
}

//mean route

//sets up GET route to /mean when request to like /mean?nums=1,2,3,4
app.get("/mean", (req, res) => {
  //call the helper function to validate the numbers
  const nums = parseNums(req, res);
  //stop the route if parseNums returns null
  if (!nums) return;
  //send JSON response to client with object of operation "mean" and value from mean function
  res.json({ operation: "mean", value: mean(nums) });
});

app.get("/median", (req, res) => {
  //call the helper function to validate the numbers
  const nums = parseNums(req, res);
  //stop the route if parseNums returns null
  if (!nums) return;
  //send JSON response to client with object of operation "median" and value from median function
  res.json({ operation: "median", value: median(nums) });
});

app.get("/mode", (req, res) => {
  //call the helper function to validate the numbers
  const nums = parseNums(req, res);
  //stop the route if parseNums returns null
  if (!nums) return;
  //send JSON response to client with object of operation "mode" and value from mode function
  res.json({ operation: "mode", value: mode(nums) });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, () => console.log("Server running on port 3000"));
