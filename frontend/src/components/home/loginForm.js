const loginForm = () => {
    const loginFormTemplage = `
    <div class="login-container">
        <i class="fa-solid fa-x fa-2x login-close-btn"></i>
        <div class="login-title">
            <h2>로그인</h2>
        </div>
        <div class="login-input-wrapper">
            <h3>아이디</h3>
            <input type="text" />
            <h3>비밀번호</h3>
            <div class="login-password-wrapper">
                <input class="login-password-input password-input" type="password"/>
                <i class="fa-solid fa-eye hidden"></i>
                <i class="fa-solid fa-eye-slash hidden"></i>
            </div>
        </div>
        <div class="login-btn-wrapper">
            <button class="login-btn">로그인하기</button>
            <div class="login-txt-wrapper">
                <span>아직 회원이 아니신가요?</span>
                <span class="link-to-join">회원가입 하기 ></span>
            </div>
        </div>
    </div>
    `;
    return loginFormTemplage;
};

export { loginForm };
