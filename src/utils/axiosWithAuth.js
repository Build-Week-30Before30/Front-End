import axios from 'axios';

const api = axios.create({
   baseURL: 'https://buildweek30before30.herokuapp.com/api',
   withCredentials: true
});

export default api;
