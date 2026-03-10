//load enviroment variables from .env file
//This lets you use process.env.MONGODB_URI, process.env.JWT_SECRET, etc.
//Keeps sensitive info out of source code
require('dotenv').config();

//Import express libraries
//Express is what we use to create the server and define routes
const express = require("express");

//Import CORS middleware
//Allows you API to accept requests from other domains 
const cors = require("cors");

//Import your route modules
//These contain the endpoint definitions for auth and dog operations
const authRoutes = require('./routes/authRoutes');
const dogRoutes = require('./routes/dogRoutes');

//import database connection function
//This connects your app to MongoDB Atlas
const connectDB = require("./db");

//create express app instance
//this app variable is what we use to define middleware and routes
const app = express();

//enables CORS for all routes
//without this, requests from your frontend might get blocked
app.use(cors());

//Parse incoming JSON payloads
//Needed to handle POST/PUT requests with JSON bodies
app.use(express.json());

//mount the auth routes under /auth
//all routes inside authRoutes will now be prefixed with /auth
app.use('/auth', authRoutes);

//mount the dog routes under /dogs
//all dog-related routes will now be prefixed with /dogs
app.use('/dogs', dogRoutes);

//default route for testing server
//GET / will return a simple message to confirm the server is running
app.get('/', (req, res) => {
  res.send('Dog Adoption Platform API is running');
});

//Start server after connecting to database
//Ensures app only runs if DB connection is successful
const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to DB', err);
    process.exit(1); //Exit if DB connection fails
  });

  //Export app to test it
  module.exports = app;