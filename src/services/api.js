import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost/houpa-app/src/services/"
});

export default api;