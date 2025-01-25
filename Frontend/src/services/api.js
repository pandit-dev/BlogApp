import axios from 'axios';

const API = axios.create({
  baseURL: 'https://blogapp-krlf.onrender.com',
  withCredentials: true
});

export default API;