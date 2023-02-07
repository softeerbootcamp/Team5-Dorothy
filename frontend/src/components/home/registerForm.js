const registerForm = () => {
    const registerFormTemplate = `
    <div class="join-container">
        <i class="fa-solid fa-x fa-2x join-close-btn"></i>
        <div class="join-title">
            <h2>회원가입</h2>
        </div>
        <div class="join-form-wrapper">
            <h3>이름</h3>
            <div class="join-input-wrapper">
            <input type="text" placeholder="본명/닉네임" />
        </div>
        <h3>아이디</h3>
        <div class="join-input-wrapper">
            <input type="text" placeholder="중복되지 않아야 합니다" />
        </div>
        <h3>비밀번호</h3>
        <div class="join-input-wrapper" id="join-password-wrapper">
            <input
            class='join-password-input'
            type="password"
            placeholder="영어 소문자, 대문자, 숫자, 특수기호 포함 최소 8자"/>
            <i class="fa-solid fa-eye"></i>
            <i class="fa-solid fa-eye-slash"></i>
            <i class="fa-solid fa-check"></i>
        </div>
        <h3>비밀번호 확인</h3>
        <div class="join-input-wrapper" id="join-passwordcheck-wrapper">
            <input class="join-passwordcheck-input" type="password" placeholder="비밀번호와 일치해야 합니다." />
            <i class="fa-solid fa-eye join-password-show"></i>
            <i class="fa-solid fa-eye-slash"></i>
            <i class="fa-solid fa-check"></i>
        </div>
        <h3>이메일</h3>
        <div class="join-input-wrapper" id="join-email-wrapper">
            <input
            type="email"
            placeholder="올바른 이메일 양식을 입력해주세요"
            class="join-email-input"/>
            <i class=" fa-solid fa-check"></i>
        </div>
    </div>
    <div class="join-btn-wrapper">
        <button disabled="true" class='register-btn'>회원가입하기</button>
        <div class="join-txt-wrapper">
            <span>이미 회원이신가요?</span>
            <span class="link-to-login">로그인 하기 ></span>
        </div>
    </div> 
`;
    return registerFormTemplate;
};

export { registerForm };
