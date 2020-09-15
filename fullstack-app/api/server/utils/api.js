// environment variables - reads the base url and auth url from the environment
// process.env.ENVIRONMENT_VARIABLE_NAME

const baseURL = process.env.HERO_BASE_URL;

// Axios
const axios = require("axios");

/**
 * This function calls the authenticate function then makes a get request based off the route path from event.js. It returns json data object or the err response message.
 */

//Async axios call for get requests
async function getData(path, token) {
  try {
    // const token = await authenticate.authenticate();
    const config = {
      method: "GET",
      url: baseURL + path, // path extension
      headers: {
        "content-type": "application/json",
        Authorization: `${token.token_type} ${token.access_token}`,
      },
    };
    return await axios(config).then((response) => response.data);
  } catch (err) {
    return err.response.data.message;
  }
}

/**
 * This function calls the authenticate function then makes a post request given the post request path.
 */

//Async axios call for post requests
async function postData(path, payload, token) {
  try {
    // const token = await authenticate.authenticate();
    const config = {
      method: "POST",
      url: baseURL + path, // path extension
      headers: {
        "content-type": "application/json",
        Authorization: `${token.token_type} ${token.access_token}`,
      },
      data: payload,
    };
    return await axios(config).then((response) => console.log(response.data));
  } catch (err) {
    return err.response.data.message;
  }
}

module.exports = exports = {
  postData: postData,
  getData: getData,
};
