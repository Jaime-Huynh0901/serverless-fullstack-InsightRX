module.exports = function (app) {
  // model controllers
  // const authCheckMiddleware = require('./server/config/middleware/authCheck');
  const eventRoutes = require("./server/routes/event");
  const heroRoutes = require("./server/routes/hero");
  const usersRoutes = require("./server/routes/users");

  // use the routes variable to make middleware to use the routes file.
  app.use(eventRoutes);
  app.use(heroRoutes);
  app.use(usersRoutes);
};
