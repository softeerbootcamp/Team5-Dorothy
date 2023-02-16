import { stateModal } from '../components/modal';
import { UserService } from './services/userservice';
import { navigateTo } from '../router';
import { qs } from '../utils/selector';

// 로그아웃
export const Logout = () => {
    alert('로그아웃');
    sessionStorage.removeItem('user');
};

// 로그인
export const GetUser = async (id, password) => {
    try {
        const response = await UserService.getUser(id, password);
        succeedLogin(response);
    } catch (e) {
        failLogin(e);
    }
};

// 회원가입
export const PostUser = async (id, password, passwordCheck, name, email) => {
    try {
        const response = await UserService.postUser(
            id,
            password,
            passwordCheck,
            name,
            email,
        );
        succeedLogin(response);
    } catch (e) {
        failLogin(e);
    }
};

const setmodal = (code, message) =>
    qs('.modal-place').insertAdjacentHTML(
        'beforeend',
        stateModal(code, message),
    );

const succeedLogin = (response) => {
    const code = response.code;
    const message = response.message;
    const name = response.data.name;
    const role = response.data.role;
    const idx = response.data.idx;
    setmodal(code, message);

    const user = { name, role, idx };
    sessionStorage.setItem('user', JSON.stringify(user));
    navigateTo('/track');
};

const failLogin = async (error) => {
    const code = await error.response.data.code;
    const message = await error.response.data.message;
    setmodal(code, message);
};
