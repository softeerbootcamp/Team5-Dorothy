const loginForm = () => {
    const loginFormTemplage = /*html*/ `
    <div class='login-wrapper'>
        <i class="fa-solid fa-x login-close-btn"></i>
        <h2 class="login-title">로그인</h2>
        <h3 class='form-title'>아이디</h3>
        <div class='form-input-wrapper'><input class="login-input" id="login-id-input" type="text" /></div>
        <h3 class='form-title'>비밀번호</h3>
        <div class='form-input-wrapper'>
            <input class="login-password-input password-input" id="login-password-input" type="password"/>
            <i class="fa-solid fa-eye hidden"></i>
        </div>
        <button class="login-btn">로그인하기</button>
        <div class="form-txt-wrapper">
            <span class="form-txt">아직 회원이 아니신가요?</span>
            <span class="form-txt link-to-join">회원가입 하기 ></span>
        </div>
    </div>
    `;
    return loginFormTemplage;
};

export { loginForm };
