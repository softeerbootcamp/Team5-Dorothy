import { stateModal } from '../components/modal';
import { UserService } from './services/userservice';
import { navigateTo } from '../router';

// 로그아웃
export const Logout = () => {
    alert('로그아웃');
    UserService.logout();
};

// 로그인
export const GetUser = async (id, password) => {
    try {
        const response = await UserService.getUser(id, password);
        if (response.code === 'CREATED') {
            sessionStorage.setItem('userInfo', response.data);
        }
        console.log(response.data);
        return Promise.resolve(response.data);
    } catch (error) {
        navigateTo('/');
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(error.code, error.message),
            );
        console.log(error);
        return Promise.reject(error.message, '로그인 실패');
    }
};

// 회원가입
export const PostUser = async (
    memberId,
    password,
    passwordCheck,
    name,
    email,
) => {
    try {
        const response = await UserService.postUser(
            memberId,
            password,
            passwordCheck,
            name,
            email,
        );
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(response.code, response.message),
            );
        console.log(response.data);
        return Promise.resolve(response.data);
    } catch (error) {
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(stateModal(error.code, error.message));
        console.log(error);
        return Promise.reject(error.message, '회원가입 실패');
    }
};

//트랙 생성
export const PostTrack = async () => {
    try {
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(response.code, response.message),
            );
    } catch (error) {
        console.log(error);
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(error.code, error.message),
            );
        return Promise.reject(error.message, '트랙 생성 실패');
    }
};
//트랙 조회
export const GetTrack = async () => {
    try {
        const response = await UserService.getTrack();
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message, '트랙 조회 실패');
    }
};
//트랙 가입
export const PostTrackMember = async () => {
    try {
        const response = await UserService.postTrackMember();
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(response.code, response.message),
            );
    } catch (error) {
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(error.code, error.message),
            );
        return Promise.reject(error.message, '트랙 가입 실패');
    }
};
//트랙 멤버 조회
export const GetTrackMember = async () => {
    try {
        const response = await UserService.getTrackMember();
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message, '트랙 멤버 조회 실패');
    }
};

//공지 사항 전체 조회
export const GetWholeNotices = async () => {
    try {
        const response = await UserService.getWholeNotice();
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message, '공지 전체 조회 실패');
    }
};

//공지 사항 단일 조회
export const GetNotice = async (id) => {
    try {
        const response = await UserService.getWholeNotice(id);
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message, '공지 단일 조회 실패');
    }
};
