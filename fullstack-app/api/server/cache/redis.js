'use strict'

function RedisCache() {

  let redisCacheStore;
  let redisClient;

  // LOCAL: REDIS_URL=localhost:6379
  if (process.env.REDIS_URL) {
    const redis = require('redis');
    const redisUrl = process.env.REDIS_URL.indexOf("redis://") === -1 ? "http://"
        + process.env.REDIS_URL : process.env.REDIS_URL;
    const rtg = require("url").parse(redisUrl);

    redisClient = redis.createClient(rtg.port, rtg.host.split(':')[0]);
    console.log('Redis Client connected');

    if (rtg.auth) {
      redisClient.auth(rtg.auth.split(":")[1], function() {
        console.log("Redis Client Connected")
      });
    }
  }

  return {
    initCacheStore: function(){
      redisCacheStore =  redisClient;
    },
    getCacheStore: function(){
      if(redisCacheStore){
        return redisCacheStore;
      }
      else{
        this.initCacheStore();
        return redisCacheStore;
      }
    },
  };
}


module.exports = exports = new RedisCache();
