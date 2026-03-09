//import mongoose library to define schema and interact with MongoDB
const mongoose = require("mongoose");

//define a schema for dogs
const dogSchema = new mongoose.Schema(
  {
    //dog's name: required string
    name: {
      type: String,
      required: true,
      trim: true, //remove extra spaces
    },
    //dog's description: optional string
    description: {
      type: String,
      trim: true, //remove extra spaces
    },
    //ownerID references the user who registered this dog
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //refers to User model
      required: true,
    },
    adoptedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //refers to User model
      default: null, //null if not adopted yet
    },
    //message from the adopter to the owner
    adoptedMessage: {
      type: String,
      default: null,
    },
    //status of the dog: available for adoption or already adopted
    status: {
      type: String,
      enum: ["available", "adopted"], //only these 2 values allowed
      default: "available",
    },
  },
  { timestamps: true }, //automatically adds createdAt and updateAt fields
);

//created the Dog model from the schema
const Dog = mongoose.model("Dog", dogSchema);

//export the Dog model so it can be used in controllers
module.exports = Dog;
