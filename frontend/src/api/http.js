import axios from 'axios';

export const http = axios.create({
    baseURL: '',
});

http.defaults.withCredentials = true;

// const token = JSON.parse(localStorage.getItem("token")) ?? false;

// http.defaults.headers.common["Authorization"] = token
//   ? `Bearer ${token}`
//   : null;
