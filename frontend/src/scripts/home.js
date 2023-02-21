import { GetUser, PostUser } from '../apis/user.js';
import { qs, qsa } from '../utils/selector.js';

const idreq = /^[a-zA-Z]{1}[a-zA-Z0-9_]{4,11}$/;
const passwordreq =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/;
const emailreq = /^[_a-z0-9-]+([._a-z0-9-]+)*@(\w+\.)+\w+$/;

function registerValidationCheck() {
    const registerButton = qs('.register-btn');
    const registerId = qs('#join-id-wrapper').querySelector('input').value;
    const registerPassword = qs('#join-password-wrapper').querySelector(
        'input',
    ).value;
    const registerPasswordCheck = qs(
        '#join-passwordcheck-wrapper',
    ).querySelector('input').value;
    const registerEmail = qs('#join-email-wrapper').querySelector(
        'input',
    ).value;

    navigator.geolocation.getCurrentPosition(function (pos) {
        var latitude = pos.coords.latitude;
        var longitude = pos.coords.longitude;
        const location = { x: latitude, y: longitude };
        sessionStorage.setItem('location', JSON.stringify(location));
        return latitude, longitude;
    });

    registerButton.disabled = !(
        idreq.test(registerId) &&
        passwordreq.test(registerPassword) &&
        registerPassword === registerPasswordCheck &&
        emailreq.test(registerEmail)
    );
}
function loginValidationCheck() {
    const loginId = qs('#login-id-input').value.trim();
    const loginPassWord = qs('#login-password-input').value;
    const loginButton = qs('.login-btn');

    loginButton.disabled = !(loginId.length > 0 && loginPassWord.length > 0);
}

function setHomeEvent() {
    const container = qs('.home-container');
    const passwordInputs = container.querySelectorAll('.password-input');
    const showPasswordEyeIcons = qsa('.fa-eye');
    const joinemail = qs('.join-email-input');
    const registerId = qs('.join-id-input');
    const registerPassword = qs('.join-password-input');
    const registerPasswordCheck = qs('.join-passwordcheck-input');
    const registerButton = qs('.register-btn');
    const loginId = qs('#login-id-input');
    const loginPassWord = qs('#login-password-input');
    const loginButton = qs('.login-btn');

    validateJoinPasswordCheck();

    container.addEventListener('click', (e) => {
        toggleLoginForm(e.target);
        toggleRegisterForm(e.target);
        clickLoginButton(e.target);
        clickRegisterButton(e.target);
        linkToLogin(e.target);
        linkToRegister(e.target);
    });

    passwordInputs.forEach((passwordInput) => {
        passwordInput.addEventListener('input', (e) => {
            showEyeIcon(e.target);
        });
    });
    showPasswordEyeIcons.forEach((eye) => {
        eye.addEventListener('mouseover', (e) => {
            showPasswordValue(e.target);
        });
    });
    showPasswordEyeIcons.forEach((eye) => {
        eye.addEventListener('mouseout', (e) => {
            hidePasswordValue(e.target);
        });
    });
    joinemail.addEventListener('input', (e) => {
        validateJoinEmail(e);
    });
    registerId.addEventListener('input', (e) => {
        validateJoinId(e);
    });
    registerPassword.addEventListener('input', (e) => {
        validateJoinPassword(e);
    });
    registerPasswordCheck.addEventListener('input', (e) => {
        validateJoinPasswordCheck(e);
    });
    registerButton.disabled = 'true';
    loginButton.disabled = 'true';
    loginId.addEventListener('input', loginValidationCheck);
    loginPassWord.addEventListener('input', loginValidationCheck);
}

const linkToLogin = (target) => {
    if (!target.classList.contains('link-to-login')) return;
    const loginForm = document.querySelector('.login-wrapper');
    const joinForm = document.querySelector('.join-container');
    const registerButton = qs('.register-btn');
    const joinInput = joinForm.querySelectorAll('input');
    const joinCheck = joinForm.querySelectorAll('.fa-check');
    const showPasswordEyeIcons = qsa('.fa-eye');
    loginForm.classList.toggle('On');
    joinForm.classList.toggle('On');
    registerButton.disabled = 'true';
    joinInput.forEach((inputForm) => {
        inputForm.value = '';
    });
    joinCheck.forEach((check) => {
        check.style.backgroundColor = `#b8b8b8`;
    });
    showPasswordEyeIcons.forEach((eye) => {
        eye.classList.remove('show');
        eye.classList.add('hidden');
    });
};

const linkToRegister = (target) => {
    if (!target.classList.contains('link-to-join')) return;
    const loginId = qs('#login-id-input');
    const loginPassWord = qs('#login-password-input');
    const loginButton = qs('.login-btn');
    const loginForm = qs('.login-wrapper');
    const joinForm = qs('.join-container');
    const showPasswordEyeIcons = qsa('.fa-eye');
    joinForm.classList.toggle('On');
    loginForm.classList.toggle('On');
    loginId.value = '';
    loginPassWord.value = '';
    loginButton.disabled = 'true';
    showPasswordEyeIcons.forEach((eye) => {
        eye.classList.remove('show');
        eye.classList.add('hidden');
    });
};

const clickRegisterButton = (target) => {
    if (!target.classList.contains('register-btn')) return;
    const container = document.querySelector('.home-container');
    const joinForm = container.querySelector('.join-container');
    const memberId = joinForm.querySelector('.id-input').value;
    const password = joinForm.querySelector('.password-input').value;
    const passwordCheck = joinForm.querySelector(
        '.join-passwordcheck-input',
    ).value;
    const name = joinForm.querySelector('.name-input').value;
    const email = joinForm.querySelector('.join-email-input').value;
    PostUser(memberId, password, passwordCheck, name, email);
};

const validateJoinId = (e) => {
    const joinid = qs('#join-id-wrapper');
    const joinidcheck = joinid.querySelector('.fa-check');

    joinidcheck.style.backgroundColor = idreq.test(e.target.value)
        ? `#2b90d9`
        : `#b8b8b8`;

    registerValidationCheck();
};

const validateJoinPasswordCheck = () => {
    const joinpwcheckWrapper = document.querySelector(
        '#join-passwordcheck-wrapper',
    );
    const joinpassword = document.querySelector('.join-password-input');
    const joinpasswordcheck = document.querySelector(
        '.join-passwordcheck-input',
    );
    const joinpwcheckshow = joinpwcheckWrapper.querySelector('.fa-eye');
    joinpwcheckWrapper.querySelector('.fa-check').style.backgroundColor =
        joinpassword.value === joinpasswordcheck.value &&
        passwordreq.test(joinpasswordcheck.value)
            ? `#2b90d9`
            : `#b8b8b8`;
    if (joinpasswordcheck.value.length > 0) {
        joinpwcheckshow.classList.add('show');
    } else {
        joinpwcheckshow.classList.remove('show');
    }

    registerValidationCheck();
};

const validateJoinEmail = (e) => {
    const joinemail = qs('#join-email-wrapper');
    const checkIcon = joinemail.querySelector('.fa-check');

    checkIcon.style.backgroundColor = emailreq.test(e.target.value)
        ? `#2b90d9`
        : `#b8b8b8`;

    registerValidationCheck();
};

const toggleLoginForm = (target) => {
    if (
        !target.className.includes('home-login-btn') &&
        !target.className.includes('login-close-btn')
    )
        return;
    const container = document.querySelector('.home-container');
    const loginForm = container.querySelector('.login-wrapper');
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
    const registerForm = document.querySelector('.join-container');
    const btnWrapper = document.querySelector('.btn-wrapper');
    registerForm.classList.toggle('On');
    btnWrapper.classList.toggle('Hidden');
};

const showEyeIcon = (target) => {
    const loginpwshow = target.closest('div').querySelector('.fa-eye');
    if (target.value.length > 0) {
        loginpwshow.classList.add('show');
        loginpwshow.classList.remove('hidden');
    } else {
        loginpwshow.classList.add('hidden');
        loginpwshow.classList.remove('show');
    }
};

const showPasswordValue = (target) => {
    const passwordWrapper = target.closest('div');
    const passwordInput = passwordWrapper.querySelector('input');
    passwordInput.type = 'text';
    target.classList.toggle('show');
};

const hidePasswordValue = (target) => {
    const passwordWrapper = target.closest('div');
    const passwordInput = passwordWrapper.querySelector('input');
    passwordInput.type = 'password';
    target.classList.toggle('show');
};

const clickLoginButton = (target) => {
    if (!target.classList.contains('login-btn')) return;
    const container = document.querySelector('.home-container');
    const loginForm = container.querySelector('.login-wrapper');
    const ID = loginForm.querySelector('.login-input').value;
    const PW = loginForm.querySelector('.password-input').value;
    GetUser(ID, PW);
};

const validateJoinPassword = (e) => {
    validateJoinPasswordCheck();

    const registerPassword = document.querySelector('#join-password-wrapper');
    registerPassword.querySelector('.fa-check').style.backgroundColor =
        passwordreq.test(e.target.value) ? `#2b90d9` : `#b8b8b8`;
    const joinpasswordshow = registerPassword.querySelector('.fa-eye');
    if (e.target.value.length > 0) {
        joinpasswordshow.classList.add('show');
    } else {
        joinpasswordshow.classList.remove('show');
    }

    registerValidationCheck();
};

export default setHomeEvent;
