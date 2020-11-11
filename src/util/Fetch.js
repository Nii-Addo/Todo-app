import axios from "axios";

const PublicFetch = axios.create({
  baseURL: process.env.REACT_APP_API_PUBLIC_URL,
});

export { PublicFetch };
