import { http } from '../http.js';

const UserService = {
    // 로그아웃
    logout: async () => {
        const response = await http.get('/member/logout', {});
    },

    //로그인
    getUser: async (id, password) => {
        const response = await http.post('/member/login', {
            memberId: id,
            password: password,
        });

        return response.data;
    },

    //회원가입
    postUser: async (memberId, password, passwordCheck, name, email) => {
        const response = await http.post('/member', {
            memberId,
            password,
            passwordCheck,
            name,
            email,
        });

        return response.data;
    },
};
export { UserService };
