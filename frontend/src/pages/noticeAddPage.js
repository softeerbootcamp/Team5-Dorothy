import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';

export default class noticeAddPage extends AbstractView {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${pageTitleTamplate('공지사항')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <input class="notice-title-input-wrapper" placeholder="제목" type="text"></input>
                    <textarea class="notice-content-input-wrapper" placeholder="내용을 작성해주세요"></textarea>
                    <button type='submit' class="notice-add-btn ">저장</button>
                    <button class="link-to-notice">취소</button>
                </section>
            </div>
        </div>
        `;
    }
}
