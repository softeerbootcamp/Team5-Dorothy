import AbstractView from './pageTemplate';
import { loginForm } from '../components/home/loginForm.js';
import { registerForm } from '../components/home/registerForm.js';
import { stateModal } from '../components/modal.js';

export default class homePage extends AbstractView {
    async getHtml() {
        return `
        <div class="home-container">
        ${stateModal('CREATED', 'zzz')}
          <div class="container">
            <div class="main-wrapper">
              <div class="title-wrapper"><h1>DOROTHY</h1></div>
              <div class="btn-wrapper">
                <button class="home-login-btn home-btn">로그인</button>
                <button class="home-join-btn home-btn">회원가입</button>
              </div>
            </div>
          </div>
          ${loginForm()}
          ${registerForm()}
        </div>
        `;
    }
}
