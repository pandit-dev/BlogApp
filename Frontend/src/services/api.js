import axios from 'axios';

const API = axios.create({
  baseURL: 'https://blogapp-krlf.onrender.com/api/',
  withCredentials: true
});

export default API;