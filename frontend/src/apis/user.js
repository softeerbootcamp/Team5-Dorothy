import { stateModal } from '../components/modal';
import { UserService } from './services/userservice';
// 로그아웃
export const Logout = () => {
    alert('로그아웃');
    UserService.logout();
};

// 로그인
export const GetUser = async (id, password) => {
    try {
        const response = await UserService.getUser(id, password);
        console.log(response.data);
        return Promise.resolve(response.data);
    } catch (error) {
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(error.code, error.message),
            );
        console.log(error.code);
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

// 트랙 생성
export const PostTrack = async () => {};
