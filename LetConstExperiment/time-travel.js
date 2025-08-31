/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination); //prints out "Ancient Egypt"

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination);//prints out "Medieval Europe" after printing "Ancient Egypt"

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";
console.log(travelDate);//this prints out normally "2024-03-15"
// travelDate = "2025-05-05";//Gets an error of "Assignment to constant variable."
// console.log(travelDate);

/*
 * Observations:
 * TODO: Explain here.
 * /
 //Gets an error of "Assignment to constant variable."

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.

console.log(timeMachineModel); //Gives me an error message of "timeMachineModel is not defined"
var timeMachineModel = "T-800"; //Returns a value of undefined

/*
 * Observations:
 * TODO: Explain here.
 */
//Gives me an error message of "timeMachineModel is not defined"
//Returns a value of undefined

