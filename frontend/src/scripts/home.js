import { navigateTo } from '../router';

function setHomeEvent() {
    const container = document.querySelector('.home-container');
    const hamburgerbtn = document.querySelector('.hamburger');
    const passwordInputs = container.querySelectorAll('.password-input');
    const hidePasswordEyeIcons = document.querySelectorAll('.fa-eye-slash');
    const showPasswordEyeIcons = document.querySelectorAll('.fa-eye');
    const joinemail = document.querySelector('.join-email-input');
    const registerPassword = document.querySelector('.join-password-input');
    const registerPasswordCheck = document.querySelector(
        '.join-passwordcheck-input',
    );

    hamburgerbtn.classList.add('hidden');

    container.addEventListener('click', (e) => {
        console.log(e.target.classList);
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
    registerPassword.addEventListener('input', (e) => {
        validateJoinPassword(e);
    });
    registerPasswordCheck.addEventListener('input', (e) => {
        validateJoinPasswordCheck(e);
    });
}

const linkToLogin = (target) => {
    if (!target.classList.contains('link-to-login')) return;
    const loginForm = document.querySelector('.login-wrapper');
    const joinForm = document.querySelector('.join-container');
    loginForm.classList.toggle('On');
    joinForm.classList.toggle('On');
};

const linkToRegister = (target) => {
    if (!target.classList.contains('link-to-join')) return;
    const loginForm = document.querySelector('.login-wrapper');
    const joinForm = document.querySelector('.join-container');
    joinForm.classList.toggle('On');
    loginForm.classList.toggle('On');
};

const clickRegisterButton = (target) => {
    if (!target.classList.contains('register-btn')) return;
    navigateTo('/track');
};

const validateJoinPasswordCheck = (e) => {
    const passwordreq =
        /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/;
    const joinpwcheckWrapper = document.querySelector(
        '#join-passwordcheck-wrapper',
    );
    const joinpassword = document.querySelector('.join-password-input');
    const joinpwcheckshow = joinpwcheckWrapper.querySelector('.fa-eye');
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
    const emailreq = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$/i;
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
    console.log(11111);
    const container = document.querySelector('.home-container');
    const registerForm = document.querySelector('.join-container');
    const btnWrapper = document.querySelector('.btn-wrapper');
    registerForm.classList.toggle('On');
    btnWrapper.classList.toggle('Hidden');
};

const showEyeIcon = (target) => {
    const loginpwhide = target.closest('div').querySelector('.fa-eye-slash');
    const loginpwshow = target.closest('div').querySelector('.fa-eye');
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
