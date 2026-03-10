//import express so we can create a router object
const express = require('express');

//create a new router instance from express
//Router lets us defince routes separately from app.js
const router = express.Router();

//import the authentication controller functions
//these functions handle the logic for registering and logging in users
const { registerUser, loginUser } = require('../controllers/authController');

//--------User Registration route--------

//define a POST route for user registration
//when a client sends POST request to /auth/register,
//this route will run the registerUser controller
router.post('/register', registerUser);

//-------User Login Route-----------

//define a POST route for user login
//when a client sends POST request to /auth/login,
//this route will run the loginUser controller
router.post('./login', loginUser);

//export the router so it can be used in app.js
//app.js will mount this router under /auth
module.exports = router;