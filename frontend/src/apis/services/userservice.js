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
        http.post(BASE_URL + '/member/login', {
            memberId: id,
            password: password,
        }),

    //회원가입
    postUser: (memberId, password, passwordCheck, name, email) =>
        http.post(BASE_URL + '/member', {
            memberId,
            password,
            passwordCheck,
            name,
            email,
        }),
    //트랙 생성
    postTrack: (trackname) => {
        http.post(BASE_URL + `/track`, {});
    },
    //트랙 조회
    getTrack: (trackMemberIdx) => {
        http.get(BASE_URL + `/tracks?trackMemberIdx=${trackMemberIdx}`, {});
    },
    postTrackMember: () => {
        http.post(BASE_URL + '/track/member');
    },
    //트랙 멤버 조회
    getTrackMember: () => {
        http.get(BASE_URL + '/track/members');
    },
    getWholeNotices: () => {
        http.get(BASE_URL + '/notices');
    },
    //
    getNotice: (id) => {
        http.get(BASE_URL + `/notices/${id}`);
    },
};
export { UserService };
