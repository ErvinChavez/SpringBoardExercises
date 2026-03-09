//import jsonwebtoken library to verify tokens
const jwt = require("jsonwebtoken");

//middleware function to protect routes
function authMiddleware(req, res, next) {
  //get the Authorization header from the reuest
  const authHeader = req.headers.authorization;

  //if no Authorization header is provided
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  //Authorization header format should be: "Bearer TOKEN"
  const token = authHeader.split(" ")[1];

  //if token is missing after splitting
  if (!token) {
    return res.status(401).json({ message: "Invalid token format." });
  }

  try {
    //verify the token using the JWT secret stored in the .env file
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //attach the decoded user data to the request object
    //this allows controllers to know which user is making the request
    req.user = decoded;

    //continue to the next middleware or controller
    next();
  } catch (error) {
    //if token is invalid or expired
    return res.status(401).json({ message: "Invalid or expired token." });
  }
}

//export the middleware so it can be used in routes
module.exports = authMiddleware;
