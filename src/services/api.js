import axios from 'axios';

const api = axios.create({
  baseURL: "http://houpa-app/src/services/",
});

export default api;