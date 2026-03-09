//import mongoose library to define schema and interact with MongoDB
const mongoose = require("mongoose");

//import bcrypt for password hasing
const bcrypt = require("bcrypt");

//define a schema for users
const userSchema = new mongoose.Schema(
  {
    //username field: required unique
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, //remove extra spaces
    },
    //password field: required
    password: {
      type: String,
      required: true,
    },
    //array of ObjectIDs referencing dogs this user has adopted
    registeredDogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dog", //refers to Dog model
      },
    ],
    //array of ObjectsIDs referencing dogs this user has adopted
    adoptedDogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dog", //refers to Dog model
      },
    ],
  },
  { timestamps: true },
); //automatically adds createdAt and UpdatedAt fields

//middleware: before saving user, hash the password if it's a new or modified
userSchema.pre("save", async function (next) {
  //check if passwod field is modified
  if (!this.isModified("password")) return next();
  try {
    //generate salt (random string for hashing)
    const salt = await bcrypt.genSalt(10);
    //hash the password with salt
    this.password = await bcrypt.hash(this.password, salt);
    next(); //continue saving
  } catch (err) {
    next(err); //pass error to next middleware
  }
});

//method to campare input password with hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

//create the User model from the schema
const User = mongoose.model("User", userSchema);

//export the User model so it can be used in controllers
module.exports = User;
