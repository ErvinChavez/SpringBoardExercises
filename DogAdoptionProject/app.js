//load enviroment variables
require("dotenv").config();

//import required libraries
const express = require("express");
const cors = require("cors");

//import database connection
const connectDB = require("./db");

//create express app
const app = express();

//middleware
app.use(cors()); //allow cross-origin requests
app.use(express.json()); //allow API to read JSON body

//connect to database
connectDB();

//basic test route
app.get("/", (req, res) => {
  res.send("Dog Adoption API running");
});

//start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
