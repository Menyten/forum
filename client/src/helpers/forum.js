import axios from 'axios'
import getCookie from './getCookie'

const forum = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  }
})

forum.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getCookie('access_token')}`
  return config;
})

export default forum