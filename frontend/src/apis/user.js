import { stateModal } from '../components/modal';
import { UserService } from './services/userservice';
import { navigateTo } from '../router';
import { qs } from '../utils/selector';

// 로그아웃
export const Logout = () => {
    alert('로그아웃');
    UserService.logout();
};

// 로그인
export const GetUser = async (id, password) => {
    try {
        const response = await UserService.getUser(id, password);
        succeedLogin(response.data.code, response.data.message);
        return Promise.resolve(response.data);
    } catch (error) {
        qs('.modal-place').insertAdjacentHTML(
            'beforeend',
            stateModal(error.response.data.code, error.response.data.message),
        );
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
        succeedLogin(response.data.code, response.data.message);
        return Promise.resolve(response.data);
    } catch (error) {
        qs('.modal-place').insertAdjacentHTML(
            'beforeend',
            stateModal(error.response.data.code, error.response.data.message),
        );
        return Promise.reject(error.message, '회원가입 실패');
    }
};

const succeedLogin = (code, message) => {
    qs('.modal-place').insertAdjacentHTML(
        'beforeend',
        stateModal(code, message),
    );
    setTimeout(() => {
        navigateTo('/track');
    }, 1500);
};
