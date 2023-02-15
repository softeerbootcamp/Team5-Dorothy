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
    await UserService.getUser(id, password)
        .then((data) => {
            succeedLogin(
                data.response.data.data,
                data.response.data.code,
                data.response.data.message,
            );
        })
        .catch((error) => {
            failLogin(error.response.data.code, error.response.data.message);
        });
};

// 회원가입
export const PostUser = async (
    memberId,
    password,
    passwordCheck,
    name,
    email,
) => {
    UserService.postUser(memberId, password, passwordCheck, name, email)
        .then((data) => {
            succeedLogin(
                data.response.data.data,
                data.response.data.code,
                data.response.data.message,
            );
        })
        .catch((error) => {
            failLogin(error.response.data.code, error.response.data.message);
        });
};

const succeedLogin = (data, code, message) => {
    qs('.modal-place').insertAdjacentHTML(
        'beforeend',
        stateModal(code, message),
    );
    const user = { name: data.name, role: data.role };
    sessionStorage.setItem('user', JSON.stringify(user));

    setTimeout(() => {
        navigateTo('/track');
    }, 1500);
};

const failLogin = (code, message) => {
    qs('.modal-place').insertAdjacentHTML(
        'beforeend',
        stateModal(code, message),
    );
};
