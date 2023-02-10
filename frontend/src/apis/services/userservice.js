import { http } from '../http.js';
import axios from 'axios';

const BASE_URL = 'https://dorothy-5z.site/api/v1';

const UserService = {
    // 로그아웃
    logout: () => {
        console.log('로그아웃 되었습니다.');
    },

    //로그인
    getUser: (id, password) =>
        axios.post(BASE_URL + '/member/login', {
            memberId: id,
            password: password,
        }),

    //회원가입
    postUser: (memberId, password, passwordCheck, name, email) =>
        axios.post(BASE_URL + '/member', {
            memberId,
            password,
            passwordCheck,
            name,
            email,
        }),
};
export { UserService };
