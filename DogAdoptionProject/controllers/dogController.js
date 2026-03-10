//import the Dog model to interact with dog collection in MongoDB
const Dog = require("../models/dogs");

//import the User model to update user's registered and adopted dogs
const User = require("../models/users");

//----------------Controller to register a new dog-----------
async function registerDog(req, res) {
  try {
    // get dog information from the request body
    const { name, description } = req.body;

    //get authenticated user id from the auth middleware
    const ownerId = req.user.userId;

    //validate required fields
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Dog name and description are required." });
    }

    //create a new dog document
    const newDog = new Dog({
      name,
      description,
      ownerId, //user who registered the dog
      adoptedBy: null, //no adopter yet
      adoptedMessage: null,
      status: "available",
      createdAt: new Date(),
    });

    //save dog to database
    await newDog.save();

    //add the dog id to the user's registeredDogs array
    await User.findByIdAndUpdate(ownerId, {
      $push: { registeredDogs: newDog._id },
    });

    //send success response
    res.status(201).json({ message: "Dog registered successfully" });
  } catch (error) {
    console.error("Register dog error:", error);

    //server error response
    res.status(500).json({ message: "Server error while registering dog." });
  }
}

//--------------------Controller to adapt a dog------------
async function adoptDog(req, res) {
  try {
    //get dog id from route parameter
    const dogId = req.params.id;

    //get user id from auth middleware
    const userId = req.user.userId;

    //get thank you message from request body
    const { message } = req.body;

    // find the dog in the database
    const dog = await Dog.findById(dogId);

    //check if dog exists
    if (!dog) {
      return res.status(404).json({ message: "Dog not found. " });
    }

    //prevent owner from adopting their own dog
    if (dog.ownerId.toString() === userId) {
      return res.status(400).json({ message: "You cannot adopt your own dog" });
    }

    //prevent adopting a dog that is already been adopted.
    if (dog.status === "adopted") {
      return res
        .status(400)
        .json({ message: "This dog has already been adopted" });
    }

    //update dog adoption information
    dog.adoptedBy = userId;
    dog.adoptedMessage = message || "";
    dog.status = "adopted";

    //save updated dog document
    await dog.save();

    //add dog to user's adoptedDogs array
    await User.findByIdAndUpdate(userId, {
      $push: { adoptedDogs: dog._id },
    });

    //respond with success message
    res.status(200).json({ message: "Dog adopted successfully.", dog });
  } catch (error) {
    console.error("Adopt dog error:", error);

    res.status(500).json({ message: "Server error while adopting dog." });
  }
}

//---------Controller to remove a dog from the platform------
async function removeDog(req, res) {
  try {
    //get dog id from the route parameters
    const dogId = req.params.id;

    //get authenticated user id
    const userId = req.user.userId;

    //find dog in database
    const dog = await Dog.findById(dogId);

    //check if dog exists
    if (!dog) {
      return res.status(404).json({ message: "Dog not found." });
    }

    //ensure only the owner can remove the dog
    if (dog.ownerId.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "You can only remove your own dogs." });
    }

    //prevent deleting a dog that has already been adopted
    if (dog.status === "adopted") {
      return res
        .status(400)
        .json({ message: "Adopted dogs cannot be removed" });
    }

    //delete the dog from database
    await Dog.findByIdAndDelete(dogId);

    //remove dog reference from user's registeredDogs array
    await User.findByIdAndUpdate(userId, {
      $pull: { registeredDogs: dogId },
    });

    //respond with success message
    res.status(200).json({ message: "Dog removed successfully." });
  } catch (error) {
    console.error("Remove dog error:", error);

    res.status(500).json({ message: "Server error while removing dog." });
  }
}

//------------Controller to list dogs registered by the user------------

async function listRegisteredDogs(req, res) {
  try {
    //get authenticated user id
    const userId = req.user.userId;

    //pagination query parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    //calculate how many documents to skip
    const skip = (page - 1) * limit;

    //find dogs registered by the user
    const dogs = await Dog.find({ ownerId: userId }).skip(skip).limit(limit);

    //return the list of dogs
    res.status(200).json(dogs);
  } catch (error) {
    console.error("List registered dogs error:", error);

    res.status(500).json({ message: "Server error while retrieving dogs." });
  }
}

//--------------Controller to list dogs adopted by the user-------------
async function listAdoptedDogs(req, res) {
  try {
    // get authenticated user id
    const userId = req.user.userId;

    //pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    //calculate skip value
    const skip = (page - 1) * limit;

    //find dogs adopted by the user
    const dogs = await Dog.find({ adoptedBy: userId }).skip(skip).limit(limit);

    //return adopted dogs
    res.status(200).json(dogs);
  } catch (error) {
    console.error("List adopted dogs error:", error);

    res
      .status(500)
      .json({ message: "Server error while retrieving adopted dogs." });
  }
}

//export all controller functions so routes can use them
module.exports = {
  registerDog,
  adoptDog,
  removeDog,
  listRegisteredDogs,
  listAdoptedDogs,
};
