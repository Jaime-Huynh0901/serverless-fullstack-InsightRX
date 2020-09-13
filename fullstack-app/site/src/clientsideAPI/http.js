import axios from "axios";

const production  = 'https://sheltered-shelf-78967.herokuapp.com';
const development = 'http://localhost:3001';
const url = (process.env.NODE_ENV==="development" ? development : production);

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json"
  }
});