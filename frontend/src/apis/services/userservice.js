import { http } from '../http.js';
import axios from 'axios';

const BASE_URL = '';

const UserService = {
    // 로그아웃
    logout: () => {
        console.log('로그아웃 되었습니다.');
    },

    //로그인
    getUser: (id, password) =>
        axios.post(BASE_URL, {
            username: id,
            password: password,
        }),

    //회원가입
    postUser: (memberId, password, passwordCheck, name, email) =>
        axios.post(BASE_URL, {
            memberId,
            password,
            passwordCheck,
            name,
            email,
        }),
};
export default UserService;
