import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://dorothy-5z.site/api/v1',
});

http.defaults.withCredentials = true;
