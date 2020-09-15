'use strict';
const api = require('../utils/api');

/**
 * Hero is used to record client and server-side events in InsightRX Applications
 */
const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');

const HeroService = function HeroService() {};

HeroService.prototype.recordEvent = function recordEvent(data) {
  // TODO: To be implemented
  recordEventHelper(data);
}

function recordEventHelper(data) {
  try {
    const body = {
      eventTypeName: 'ClickedLink',
      versionNumber: '2',    // version numbers for client events get passed from client
      organizationId: '123',
      sourceName: "ucla",      // Give your application an official name!
      occurredAt: moment().format('YYYY-MM-DDTHH:mm:ss'),
      eventData: data
    };

    api.postData('/api/event', body);
  } catch (err) {
    throw err;
  }
}

// function writeToHeroHelper(/* todo: pass in necessary parameters, don't forget the auth token!*/) {
//   if (process.env.HERO_ENDPOINT) {
//     try {
//       return axios.post(process.env.HERO_ENDPOINT, /* payload  ,*/ {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + token
//         }
//       });
//     } catch (err) {
//       throw err;
//     }
//   }
// }

// function logError(eventName, source, error) {
//   const errorObject = {
//     eventName: eventName,
//     message: error.message,
//     data:  _.get(error, 'response.data') || "No additional information",
//     status: _.get(error, 'response.status') || 500
//   };
//   console.error(`[${source}] Error logging to Hero: `, {errorObject});
// }


module.exports = exports = new HeroService();
