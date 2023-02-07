function setHomeEvent() {
    const container = document.querySelector('.home-container');
    const hamburgerbtn = document.querySelector('.hamburger');
    const loginPW = container.querySelector('.login-password-input');
    const loginpwhide = document.querySelectorAll('.fa-eye-slash');
    const loginpwshow = document.querySelector('.fa-eye');

    hamburgerbtn.classList.add('hidden');

    container.addEventListener('click', (e) => {
        toggleLoginForm(e.target);
        toggleRegisterForm(e.target);
        // clickLoginButton(e.target);
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
    loginpwhide;
};

const showPasswordValue = (target) => {
    const loginPW = document.querySelector('.login-password-input');
    loginPW.type = 'text';
    target.classList.remove('show');
};

const hidePasswordValue = (target) => {
    const loginPW = document.querySelector('.login-password-input');
    loginPW.type = 'password';
    target.classList.toggle('show');
};

// const clickLoginButton = (target) => {
//     if (!target.classList.includes('login-btn')) return;
//     const container = document.querySelector('.home-container');
//     const loginForm = container.querySelector('.login-container');
//     const maintitle = container.querySelector('.title-wrapper');
//     loginForm.classList.toggle('On');
//     maintitle.classList.add('Mini');
//     document.body.querySelector('.hamburger').classList.add('show');
//     document.body.querySelector('.home-container').classList.add('Start');
// };

export default setHomeEvent;
