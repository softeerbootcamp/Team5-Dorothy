import { stateModal } from '../components/modal';
import { UserService } from './services/userservice';
import { navigateTo } from '../router';
import { qs, qsa } from '../utils/selector';

// 로그아웃
export const Logout = async () => {
    try {
        const response = await UserService.logout();
        alert('로그아웃');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('location');
        qs('.hamburger').classList.add('hidden');
        qs('.nav').classList.add('hidden');
        const aTag = qsa('a');
        for (var i = 0; i < qsa('a').length; i++) {
            aTag[i].classList.add('hidden');
        }
    } catch (e) {
    }
};

// 로그인
export const GetUser = async (id, password) => {
    try {
        const response = await UserService.getUser(id, password);
        succeedLogin(response);
        qs('.hamburger').classList.remove('hidden');
        qs('.nav').classList.remove('hidden');
        const aTag = qsa('a');
        for (var i = 0; i < qsa('a').length; i++) {
            aTag[i].classList.remove('hidden');
        }
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

    const container = document.querySelector('.home-container');
    const loginForm = container.querySelector('.login-wrapper');
    const maintitle = container.querySelector('.title-wrapper');
    setmodal(code, message);

    loginForm.classList.toggle('On');
    maintitle.classList.add('Mini');
    document.body.querySelector('.hamburger').classList.remove('hidden');
    document.body.querySelector('.home-container').classList.add('Start');

    const user = { name, role, idx };

    sessionStorage.setItem('user', JSON.stringify(user));
    setTimeout(() => {
        navigateTo('/track');
    }, 1000);
};

const failLogin = async (error) => {
    const code = await error.response.data.code;
    const message = await error.response.data.message;
    setmodal(code, message);
};
