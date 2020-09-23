const express = require("express");
const app = express();
const passport = require("passport");
// const { users } = require("./controllers");
const port = process.env.PORT || 3001;
const cors = require("cors");

// Env file
if (app.get("env") === "development") {
  require("dotenv").config();
}

/** Initialize Cache **/
const redisStore = require("./server/cache/redis");
redisStore.initCacheStore();

/**
 * Configure Passport
 */

try {
  require("./config/passport")(passport);
} catch (error) {
  console.log(error);
}

/**
 * Configure Express.js Middleware
 */

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("x-powered-by", "serverless-express");
  next();
});

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Enable JSON use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//------- Start routes
// Routes
// =============================================================
// import routes to the app.js.
require("./routes")(app);
//------- End routes

/**
 * Error Handler
 */
app.use(function (err, req, res, next) {
  console.error(err);
  res
    .status(500)
    .json({ error: `Internal Serverless Error - "${err.message}"` });
});

app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});

module.exports = app;
