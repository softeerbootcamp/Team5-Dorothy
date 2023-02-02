import AbstractView from './AbstractView.js';

export default class homePage extends AbstractView {
    constructor() {
        super();
    }
    async getHtml() {
        return `
        <div class="container">
            <div class="main-wrapper">
                <div class="title-wrapper"><h1>DOROTHY</h1></div>
                <div class="btn-wrapper">
                <button class="login-btn">로그인</button>
                <button class="join-btn">회원가입</button>
                </div>
            </div>
        </div>
        
        <div class="login-container">
            <i class="fa-solid fa-x fa-2x login-close-btn"></i>
            <div class="login-title">
                <h2>로그인</h2>
            </div>
            <div class="login-input-wrapper">
                <h3>아이디</h3>
                <input type="text" />
                <h3>비밀번호</h3>
                <div id="login-password-wrapper">
                    <input type="password" /><i class="fa-solid fa-eye"></i
                    ><i class="fa-solid fa-eye-slash"></i>
                </div>
            </div>
            <div class="login-btn-wrapper">
                <button>로그인하기</button>
                <div class="login-txt-wrapper">
                    <span>아직 회원이 아니신가요?</span>
                    <span class="link-to-join">회원가입 하기 ></span>
                </div>
            </div>
        </div>

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
            <div class="join-input-wrapper" id="JoinPassword">
              <input
                type="password"
                placeholder="영어 소문자, 대문자, 숫자, 특수기호 포함 최소 8자"
              /><i class="fa-solid fa-eye"></i><i class="fa-solid fa-eye-slash"></i
              ><i class="fa-solid fa-check"></i>
            </div>
            <h3>비밀번호 확인</h3>
            <div class="join-input-wrapper" id="JoinPWcheck">
              <input type="password" placeholder="비밀번호와 일치해야 합니다." /><i
                class="fa-solid fa-eye"
              ></i
              ><i class="fa-solid fa-eye-slash"></i
              ><i class="fa-solid fa-check"></i>
            </div>
            <h3>이메일</h3>
            <div class="join-input-wrapper" id="JoinEmail">
              <input
                type="email"
                placeholder="올바른 이메일 양식을 입력해주세요"
              /><i class="fa-solid fa-check"></i>
            </div>
          </div>
          <div class="join-btn-wrapper">
            <button disabled="true">회원가입하기</button>
            <div class="join-txt-wrapper">
              <span>이미 회원이신가요?</span>
              <span class="link-to-login">로그인 하기 ></span>
            </div>
          </div>
        </div>
        `;
    }
}
