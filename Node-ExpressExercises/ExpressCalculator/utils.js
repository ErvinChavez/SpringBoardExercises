//mean
function mean(nums) {
  //reduce gives the total of the numbers; starts a 0,
  // 0 becomes a and b is the next number in array,
  // repeats until it reaches last number in array
  const sum = nums.reduce((a, b) => a + b, 0);
  //divide the total by the number of numbers in array to get mean
  return sum / nums.length;
}

//median
function median(nums) {
  //sort will start with first 2 numbers in array, a - b
  //if the result is negative, a comes before b.
  //if the result is positive, b comes before a.
  //if result is 0, order stays the same
  //returns the array in ascending order
  nums.sort((a, b) => a - b);
  //find the mid number by dividing the length by 2 and round it down in case of uneven
  const mid = Math.floor(nums.length / 2);
  //if module = 0 then it had a even number of elements
  if (nums.length % 2 === 0) {
    //if so ,then add the 2 middle nums and divide it by 2 and return it
    return (nums[mid - 1] + nums[mid]) / 2;
  } else {
    //otherwise is module is not 0, then it has odd length array
    //return the middle number
    return nums[mid];
  }
}

//mode
function mode(nums) {
  //object to store how many times each number appears
  const freq = {};
  //tracks the highest frequency seen so far
  let maxFreq = 0;
  //stores the numbers that appear most often
  let modeVal = [];

  //run through each value inside array, one at a time
  for (let num of nums) {
    //if there exist a value(count) for that key, use that value otherwise use 0
    //Then add 1 to increase the count to it
    freq[num] = (freq[num] || 0) + 1;
    //if the value of freq[num] is greater then current maxFreq
    if (freq[num] > maxFreq) {
      //maxFreq is now that value
      maxFreq = freq[num];
    }
  }
  // lets go through each number in freq
  for (let key in freq) {
    //if the value of that freq key equals maxFreq
    if (freq[key] === maxFreq) {
      //push the key of that maxFreq into modeVal as a Number
      modeVal.push(Number(key));
    }
  }

  //if every number appears the same number of times return null
  if (modeVal.length === nums.length) return null;
  //if there is exactly one mode only, return that number
  //if there are multiple modes, return the array of those numbers
  return modeVal.length === 1 ? modeVal[0] : modeVal;
}

module.exports = { mean, median, mode };
