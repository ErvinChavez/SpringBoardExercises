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
module.exports = parseNums;
