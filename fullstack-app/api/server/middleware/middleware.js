const axios  = require('axios');
const redisCache = require('../cache/redis').getCacheStore();

async function authenticate(req, res, next) {
  let token = null;
  let tokenType = null;

  /** Let's check if the token is available in the cache **/
  try {
    let response =  await redisGet(constructKey());
    if (typeof response === 'string') {
      response = JSON.parse(response);
    }
    token = response.access_token;
    tokenType = response.token_type;

    console.log("Fetched token from cache successfully");
  } catch (err) {
    // do nothing
  }

  /** If the token wasn't available in the cache, then make the HTTP request to fetch it **/
  if (!token) {
    try {
      const { data } = await fetchAuthToken();
      token = data.access_token;
      tokenType = data.token_type;

      /**  Now save it to the cache to be grabbed in subsequent requests **/
      await redisSet(constructKey(), data.expires_in, JSON.stringify(data));
    } catch (err) {
      next(err);
    }
  }

  if (!req.locals) {
    req.locals = {}
  }
  req.locals.access_token = token;
  req.locals.token_type = tokenType;

  next();
}

/** Fetch auth token from external API **/
async function fetchAuthToken() {
  const body = {
    grant_type: process.env.GRANT_TYPE,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    audience: process.env.AUDIENCE
  };

  return await axios.post(process.env.HERO_AUTH_URL, body, {
    headers: { 'content-type': 'application/json'}
  })
}

/** Makeshift key generator **/
function constructKey() {
  return process.env.CLIENT_ID+ process.env.CLIENT_SECRET + process.env.GRANT_TYPE + process.env.AUDIENCE
}

/** Fetches value for given key in Redis **/
async function redisGet(key) {
  return new Promise((resolve, reject) => {
    redisCache.get(key, (err, data) => {
      if (err || !data) {
        reject();
      } else {
        resolve(data);
      }
    })
  })
}

/**
 * Sets value in redis for given key/value pair
 *
 */
async function redisSet(key, expiration = 300000, value) {
  return new Promise((resolve, reject) => {
    redisCache.setex(key,  expiration, value, function(err, result){
      if(!err){
        resolve()
      }
      else{
        console.error("Redis Error: ", { key, value });
        reject(err);
      }
    });
  })
}

module.exports = exports = {
  authenticate: authenticate
};