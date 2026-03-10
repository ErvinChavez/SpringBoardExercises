//import express so we can create a router object
const express = require('express');

//create a new router instance from express
const router = express.Router();

//import the authentication middleware
//this middleware ensures only logged-in users can access these routes
const authMiddleware = require('../middlewares/authMiddleware');

//import all controller function from dogController
const {
    registerDog,
    adoptDog,
    removeDog,
    listRegisteredDogs,
    listAdoptedDogs,
} = require('../controllers/dogController');


//--------Register a new dog------------

//POST /dogs
//Users must be logged in to register a dog
//authMiddleware runs first to verify JWT token and attach user info to req.user
router.post('/', authMiddleware, registerDog);

//--------Adopt a dog------------
//POST /dogs/:id/adopt
//:id is the MongoDB ObjectId of the dog to adopt
//authMiddleware ensures user is logged in
router.post("/:id/adopt", authMiddleware, adoptDog);


//--------Remove A Dog----------
//DELETE /dogs/:id/adopt
// :id is the MongoDB ObjectId of the dog to adopt
//authMiddleware ensures user is logged in
router.delete('/:id/', authMiddleware, removeDog);

//-------List Dogs registered by the user---------
// GET /dogs/mine
//Optional query params: page, limit, status
//authMiddleware ensures user is logged in
router.get('/mine', authMiddleware, listRegisteredDogs);

//--------List Dogs adopted by the user----------
//GET /dogs/adopted
//Optional query params: page, limit
//authMiddleware ensures user is logged in
router.get('/adopted', authMiddleware, listAdoptedDogs);

//export the router so it can be mounted in app.js
module.exports = router;