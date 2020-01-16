import axios from 'axios'
import getCookie from './getCookie'

const forum = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getCookie('access_token')}`
  }
})

export default forum