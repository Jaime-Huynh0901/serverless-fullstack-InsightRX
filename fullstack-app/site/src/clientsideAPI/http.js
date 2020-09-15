import axios from "axios";

const production = "http://website-sqazxz7.s3-website.us-east-1.amazonaws.com/";
const development = "http://localhost:3001";
const url = process.env.NODE_ENV === "development" ? development : production;

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
