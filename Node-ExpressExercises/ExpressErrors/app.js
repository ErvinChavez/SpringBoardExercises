const express = require("express");
const ExpressError = require("./expressError");

const app = express();

function attemptToSaveToDB() {
  throw "Connection Error!";
}

const USERS = [
  { username: "StacysMon", city: "Reno" },
  { username: "Rosalia", city: "R" },
];

app.get("/users/:username", function (req, res, next) {
  try {
    const user = USERS.find((u) => u.username === req.params.username);
    if (!user) throw ExpressError("invalid username", 404);
    return res.send({ user });
  } catch (e) {
    next(e);
  }
});

app.get("/secret", (req, res, next) => {
  debugger;
  try {
    if (req.query.password != "popcorn") {
      throw new ExpressError("invalid password", 403);
    }
    return res.send("CONGRATS YOU KNOW THE PASSWORD");
  } catch (e) {
    next(e);
  }
});

app.get("/savetodb", (req, res) => {
  try {
    attemptToSaveToDB();
    return res.send("SAVED TO DB");
  } catch (e) {
    return next(new ExpressError("Database Error"));
  }
});

app.use((req, res, next) => {
  const e = new ExpressError("invalid password");
  next(e);
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
