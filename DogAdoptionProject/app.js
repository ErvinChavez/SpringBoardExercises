//load enviroment variables
//This lets you use process.env.MONGOD_URI, process.env.JWT_SECRET, etc.
//Keeps sensitive info out of source code
require("dotenv").config();

//Import express libraries
//Express is what we use to create the server and define routes
const express = require("express");

//Import CORS middleware
//Allows you API to accept requests from other domains
const cors = require("cors");

//Import your route modules
//These contain the endpoint definitions for auth and dog operations
const authRoutes = require('./routes/authRoutes');
const dogRoutes = require('/routes/dogRoutes');

//import database connection function
//This connects your app to MongoDB Atlas
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
