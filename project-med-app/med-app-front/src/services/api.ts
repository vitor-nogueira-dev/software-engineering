import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  }
});

if (typeof window !== 'undefined') {
  const token = sessionStorage.getItem('token');
  if (token) {
    api.defaults.headers.common['Authorization'] = token;
  }
}

export default api;