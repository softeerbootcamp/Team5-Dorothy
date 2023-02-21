import axios from 'axios';

export const http = axios.create({
    //배포용
    baseURL: 'https://dorothy-5z.site/api/v1',
    //개발용
    //baseURL: '/api',
});

http.defaults.withCredentials = true;
