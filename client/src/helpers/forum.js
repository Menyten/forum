import axios from 'axios'
import getCookie from './getCookie'

const forum = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  }
})

forum.interceptors.request.use(
  config => {
    if (config.baseURL) {
      const token = getCookie('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

export default forum