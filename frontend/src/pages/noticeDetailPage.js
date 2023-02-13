import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
import noticeData from '../components/notice/noticeInfo.js';
import { noticePreview } from '../components/notice/noticeComponents.js';

export default class noticeDetailPage extends AbstractView {
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
                        <div class="notice-title-wrapper">이것은 제목입니다.</div>
                        <div class="notice-content-wrapper">이것은 내용입니다.</div>
                        <button class="notice-edit-btn">수정</button>
                        <button class="notice-delete-btn">삭제</button>
                        <button class="link-to-notice">목록</button>
                </section>
            </div>
        </div>
        `;
    }
}
