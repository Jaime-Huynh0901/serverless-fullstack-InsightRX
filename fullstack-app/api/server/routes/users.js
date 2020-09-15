const express = require("express");
const router = express.Router();
const passport = require("passport");
const { users } = require("../../controllers");

// Since Express doesn't support error handling of promises out of the box,
// this handler enables that
const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

/**
 * Routes - Public
 */
router.options(`*`, (req, res) => {
  res.status(200).send();
});

router.post(`/users/register`, asyncHandler(users.register));

router.post(`/users/login`, asyncHandler(users.login));

router.get(`/test/`, (req, res) => {
  res.status(200).send("Request received");
});

router.get("/hello", function (req, res) {
  res.status(200).send("Hello World!");
});

/**
 * Routes - Protected
 */

router.post(
  `/user`,
  passport.authenticate("jwt", { session: false }),
  asyncHandler(users.get)
);

/**
 * Routes - Catch-All
 */

router.get(`/*`, (req, res) => {
  res.status(404).send("Route not found");
});

module.exports = router;
