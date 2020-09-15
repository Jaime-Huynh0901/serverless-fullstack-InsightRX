const express = require('express');
const router = express.Router();
const heroService = require('../services/heroService');

/**
 * Suppose this application you are currently building is called the "Hero User Interface"
 * You should be able to record events to the Hero API as you would for any other application (Nova, Apollo, etc.)
 *
 * As an example:
 * 1. You can register an event called "submitButton"
 * 2. Inside this Hero User Interface Application, we should be able to "record" this
 *    action
 * 3. From the UI, build the necessary payload that adheres to the structure defined by the JSON schema
 *    The source in this case would be "Hero Application" (Or whatever name you decide to call this application)
 * 4. Save it by calling this endpoint (to be implemented)
 */
router.post('/save', async (req, res) => {
    res.status(200).send({}); // Send success to the user right away - we don't want to block the event loop
   try {
    heroService.recordEvent(req.body);
   }
   catch (err) {
    throw err;
  }
});

module.exports = router;
