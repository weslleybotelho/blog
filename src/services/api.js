import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-api-rose.vercel.app/',
});

export default api;
