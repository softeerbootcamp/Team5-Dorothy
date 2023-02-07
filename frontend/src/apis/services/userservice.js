import { http } from '../http.js';
import axios from 'axios';

const BASE_URL = '';

const UserService = {
    // 로그아웃
    logout: () => {
        console.log('로그아웃 되었습니다.');
        window.localStorage.removeItem('token');
        window.location.href = '';
    },

    //로그인
    getUser: (id, password) =>
        axios.post(BASE_URL, {
            username: id,
            password: password,
        }),

    //회원가입 api
    postUser: (id, password, name, email) =>
        axios.post(BASE_URL, {
            username: id,
            password: password,
            nickname: name,
            email: email,
        }),
};
export default UserService;
