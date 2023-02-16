import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';

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
                        <div class ="notice-detail-wrapper"><i class="fa-regular fa-clock"></i>  2023-02-14 15:12 ｜ <i class="fa-regular fa-user"></i>  3 </div>
                        <div class="notice-content-wrapper">이것은 내용입니다.</div>
                        <button class="notice-edit-btn"><div class="rental-icon"><i class="fa-solid fa-list"></i></div>목록</button>
                        <button class="notice-edit-btn"><div class="rental-icon"><i class="fa-solid fa-trash"></i></div>삭제</button>
                        <button class="notice-edit-btn"><div class="rental-icon"><i class="fa-solid fa-pen"></i></div>수정</button>
                </section>
            </div>
        </div>
        `;
    }
}
