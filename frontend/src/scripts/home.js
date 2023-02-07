import { navigateTo } from '../router';

function setHomeEvent() {
    const container = document.querySelector('.home-container');
    const hamburgerbtn = document.querySelector('.hamburger');
    const loginPW = container.querySelector('.login-password-input');
    // const loginpwhide = document.querySelectorAll('.fa-eye-slash');
    const loginpwshow = document.querySelector('.fa-eye');
    const joinemail = document.querySelector('.join-email-input');
    const registerPassword = document.querySelector('.join-password-input');
    const registerPasswordCheck = document.querySelector(
        '.join-passwordcheck-input',
    );
    const registerPasswordShow = document.querySelector('.join-password-show');

    hamburgerbtn.classList.add('hidden');

    container.addEventListener('click', (e) => {
        toggleLoginForm(e.target);
        toggleRegisterForm(e.target);
        clickLoginButton(e.target);
    });
    loginPW.addEventListener('input', (e) => {
        showPassword(e.target);
    });
    loginpwshow.addEventListener('mouseover', (e) => {
        showPasswordValue(e.target);
    });
    loginpwshow.addEventListener('mouseout', (e) => {
        hidePasswordValue(e.target);
    });
    joinemail.addEventListener('input', (e) => {
        validateJoinEmail(e);
    });
    registerPassword.addEventListener('input', (e) => {
        validateJoinPassword(e);
    });
    registerPasswordCheck.addEventListener('input', (e) => {
        validateJoinPasswordCheck(e);
    });
    registerPasswordShow.addEventListener('mouseover', (e) => {});
}

const validateJoinPasswordCheck = (e) => {
    const passwordreq =
        /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/;
    const joinpwcheckWrapper = document.querySelector(
        '#join-passwordcheck-wrapper',
    );
    const joinpwcheck = joinpwcheckWrapper.querySelector('.fa-eye-slash');
    const joinpassword = document.querySelector('.join-password-input');
    const joinpwcheckhide = joinpwcheckWrapper.querySelector('.fa-eye-slash');
    const joinpwcheckshow = joinpwcheckWrapper.querySelector('.fa-eye');
    console.log(joinpwcheck);
    joinpwcheckWrapper.querySelector('.fa-check').style.backgroundColor =
        joinpassword.value === e.target.value &&
        passwordreq.test(e.target.value)
            ? `#2b90d9`
            : `#b8b8b8`;

    if (e.target.value.length > 0) {
        joinpwcheckshow.classList.add('show');
    } else {
        joinpwcheckshow.classList.remove('show');
        joinpwcheckhide.classList.remove('show');
    }
};

const validateJoinEmail = (e) => {
    const joinemail = document.querySelector('#join-email-wrapper');
    const emailreq =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    joinemail.querySelector('.fa-solid').style.backgroundColor = emailreq.test(
        e.target.value,
    )
        ? `#2b90d9`
        : `#b8b8b8`;
};

const toggleLoginForm = (target) => {
    if (
        !target.className.includes('home-login-btn') &&
        !target.className.includes('login-close-btn')
    )
        return;
    const container = document.querySelector('.home-container');
    const loginForm = container.querySelector('.login-container');
    const btnWrapper = container.querySelector('.btn-wrapper');
    loginForm.classList.toggle('On');
    btnWrapper.classList.toggle('Hidden');
};

const toggleRegisterForm = (target) => {
    if (
        !target.className.includes('home-join-btn') &&
        !target.className.includes('join-close-btn')
    )
        return;
    const container = document.querySelector('.home-container');
    const registerForm = container.querySelector('.join-container');
    const btnWrapper = container.querySelector('.btn-wrapper');
    registerForm.classList.toggle('On');
    btnWrapper.classList.toggle('Hidden');
};

const showPassword = (target) => {
    const loginpwhide = document.querySelector('.fa-eye-slash');
    const loginpwshow = document.querySelector('.fa-eye');
    if (target.value.length > 0) {
        loginpwshow.classList.add('show');
        loginpwshow.classList.remove('hidden');
    } else {
        loginpwshow.classList.add('hidden');
        loginpwshow.classList.remove('show');
        loginpwhide.classList.remove('show');
    }
};

const showPasswordValue = (target) => {
    const password = target.closest('div').querySelector('input');
    const loginPW = document.querySelector('.login-password-input');
    loginPW.type = 'text';
    target.classList.remove('show');
};

const hidePasswordValue = (target) => {
    const loginPW = document.querySelector('.login-password-input');
    loginPW.type = 'password';
    target.classList.toggle('show');
};

const clickLoginButton = (target) => {
    if (!target.classList.contains('login-btn')) return;
    const container = document.querySelector('.home-container');
    const loginForm = container.querySelector('.login-container');
    const maintitle = container.querySelector('.title-wrapper');
    loginForm.classList.toggle('On');
    maintitle.classList.add('Mini');
    document.body.querySelector('.hamburger').classList.add('show');
    document.body.querySelector('.home-container').classList.add('Start');
    setTimeout(() => {
        navigateTo('/main');
    }, 1500);
};

const validateJoinPassword = (e) => {
    const passwordreq =
        /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/;
    const registerPassword = document.querySelector('#join-password-wrapper');
    registerPassword.querySelector('.fa-check').style.backgroundColor =
        passwordreq.test(e.target.value) ? `#2b90d9` : `#b8b8b8`;
    const joinpasswordhide = registerPassword.querySelector('.fa-eye-slash');
    const joinpasswordshow = registerPassword.querySelector('.fa-eye');
    if (joinpasswordhide.classList.contains('show')) {
        return;
    }
    if (e.target.value.length > 0) {
        joinpasswordshow.classList.add('show');
    } else {
        joinpasswordshow.classList.remove('show');
        joinpasswordhide.classList.remove('show');
    }
};

export default setHomeEvent;
