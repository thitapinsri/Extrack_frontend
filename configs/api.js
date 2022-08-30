import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.SERVER_URL,
})

export default api