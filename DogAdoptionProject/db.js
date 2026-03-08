//load enviroment variables from the .env file
require("dotenv").config();

//import the mongoose library, which allows us to interact with MongoDB
const mongoose = require("mongoose");

//Create an async function that will handle connecting to the database
async function connectDB() {
  try {
    //connect to MongoDB using the URI stored in the .env file
    //the URI already includes the database name (dogAdoption)
    await mongoose.connect(process.env.MONGODB_URI);

    //if the connection succeeds, print a message to the console
    console.log("MongoDB connected");
  } catch (error) {
    //if there is an error connecting to the database,
    //print the error message so we can debug it
    console.log("Database connection error:", error);

    //stop the Node.js application if the DB cannot connect
    //This prevents the server from running without a database
    process.exit(1);
  }
}
//export the function so other files can use it
module.exports = connectDB;
