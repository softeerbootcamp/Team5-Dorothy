import axios from 'axios';

export const http = axios.create({
    //baseURL: 'https://dorothy-5z.site/api/v1',
    //개발용,
    baseURL: '/api',
});

http.defaults.withCredentials = true;
