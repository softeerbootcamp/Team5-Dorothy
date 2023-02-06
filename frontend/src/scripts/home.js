function setHomeEvent() {
    const container = document.querySelector('.home-container');
    const hamburgerbtn = document.querySelector('.hamburger');
    const loginPW = container.querySelector('.login-password-input');
    hamburgerbtn.classList.add('hidden');

    container.addEventListener('click', (e) => {
        toggleLoginForm(e.target);
        toggleRegisterForm(e.target);
    });
    loginPW.addEventListener('input', (e) => {
        showPassword(e);
    });
}

const toggleLoginForm = (target) => {
    if (
        !target.className.includes('login-btn') &&
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
        !target.className.includes('join-btn') &&
        !target.className.includes('join-close-btn')
    )
        return;
    const container = document.querySelector('.home-container');
    const registerForm = container.querySelector('.join-container');
    const btnWrapper = container.querySelector('.btn-wrapper');
    registerForm.classList.toggle('On');
    btnWrapper.classList.toggle('Hidden');
};

const showPassword = (e) => {
    const loginpwhide = document.querySelector('.fa-eye-slash');
    if (loginpwhide.classList.contains('show')) {
        return;
    }
    if (e.target.value.length > 0) {
        loginpwshow.classList.add('show');
    } else {
        loginpwshow.classList.remove('show');
        loginpwhide.classList.remove('show');
    }
};

export default setHomeEvent;
