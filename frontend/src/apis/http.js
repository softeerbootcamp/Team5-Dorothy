import axios from 'axios';

export const http = axios.create({
    baseURL: '',
});

http.defaults.withCredentials = true;

// http.defaults.headers.common["Authorization"] = token
//   ? `Bearer ${token}`
//   : null;
