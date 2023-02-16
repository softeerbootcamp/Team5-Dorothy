const registerForm = () => {
    const registerFormTemplate = /*html */ `
    <div class='join-container'>
        <i class="fa-solid fa-x join-close-btn"></i>
        <h2 class='join-title'>회원가입</h2>

        <h3 class='form-title'>이름</h3>
        <div class='form-input-wrapper'>
            <input class="name-input" type="text" />
        </div>

        <h3 class='form-title'>아이디</h3>
        <div class="input-check-wrapper" id="join-id-wrapper">
            <div class='form-input-wrapper'>
                <input
                type="text"
                placeholder="ID는 최소 5자 이상이어야 합니다."
                class="id-input join-id-input"/>
            </div>
            <i class=" fa-solid fa-check"></i>
        </div>

        <h3 class='form-title'>비밀번호</h3>
        <div class="input-check-wrapper" id="join-password-wrapper">
            <div class='form-input-wrapper'>
                <input class="join-password-input password-input" type="password" placeholder="영어 소문자, 숫자, 특수기호 포함 최소 8자"/>
                <i class="fa-solid fa-eye hidden"></i>
            </div>
            <i class="fa-solid fa-check"></i>
        </div>

        <h3 class='form-title'>비밀번호 확인</h3>
        <div class="input-check-wrapper" id="join-passwordcheck-wrapper">
            <div class='form-input-wrapper'>
                <input class="join-passwordcheck-input  password-input" type="password" placeholder="비밀번호와 일치해야 합니다."/>
                <i class="fa-solid fa-eye hidden"></i>
            </div>
            <i class="fa-solid fa-check"></i>
        </div>

        <h3 class='form-title'>이메일</h3>
        <div class="input-check-wrapper" id="join-email-wrapper">
            <div class='form-input-wrapper'>
                <input
                type="email"
                placeholder="올바른 이메일 양식을 입력해주세요"
                class="join-email-input"/>
            </div>
            <i class=" fa-solid fa-check"></i>
        </div>

        <button class='register-btn'>회원가입하기</button>
        <div class="form-txt-wrapper">
            <span class="form-txt">이미 회원이신가요?</span>
            <span class="form-txt link-to-login">로그인 하기 ></span>
        </div>
    </div> 
`;
    return registerFormTemplate;
};

export { registerForm };
