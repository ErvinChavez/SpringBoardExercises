//import bcrypt to hash passwords and compare hashes
const bcrypt = require("bcrypt");
//import jwt to generate tokens for login
const jwt = require("jsonwebtoken");
//import user model to interact with the database
const User = require("../models/users");

//register controller
async function registerUser(req, res) {
  try {
    const { username, password } = req.body;

    //check if both username and password are provided
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password required." });
    }

    //check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken." });
    }

    // // hash the password with bcrypt (10 rounds of salt)
    // const hashedPassword = await bcrypt.hash(password, 10);

    //create a new user document
    const newUser = new User({
      username,
      password,
      registeredDogs: [],
      adoptedDogs: [],
    });

    //save the user to the database
    await newUser.save();

    //respond with success message
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error during registration." });
  }
}

//login controller
async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    //check if both username and password are provided
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "username and password required." });
    }

    //find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "invalid username or password" });
    }

    //compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: " Invalid username or password." });
    }

    //generate a jwt token valid for 24 hours
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );

    //respond with token
    res.status(200).json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login." });
  }
}

//export the controller functions to use in routes
module.exports = { registerUser, loginUser };
