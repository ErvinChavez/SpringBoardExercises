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
  attemptToSaveToDB();
  res.send("SAVED TO DB!");
});

app.use((error, req, res, next) => {
  res.send("OH NO IT IS AN ERROR!!!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
