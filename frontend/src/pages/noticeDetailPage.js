import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
import { GetNotice } from '../apis/notice.js';
import { userRole } from '../store/user.js';

export default class noticeDetailPage extends AbstractView {
    async getHtml() {
        const noticeID = window.location.pathname.split('/')[2];
        const notice = await GetNotice(noticeID);
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
                        <div class="notice-title-wrapper">${notice.title}</div>
                        <div class ="notice-detail-wrapper"><i class="fa-regular fa-clock"></i>  ${new Date(
                            notice.createdAt,
                        )
                            .getFullYear()
                            .toString()
                            .slice(2, 4)}-${(
            '00' + (new Date(notice.createdAt).getMonth() + 1).toString()
        ).slice(-2)}-${(
            '00' + new Date(notice.createdAt).getDate().toString()
        ).slice(-2)} ｜ <i class="fa-regular fa-user"></i>  ${
            notice.views
        } </div>
                        <div class="notice-content-wrapper">${
                            notice.title
                        }</div>
                        <button class="notice-edit-btn"><div class="rental-icon"><i class="fa-solid fa-list"></i></div>목록</button>
                        ${
                            userRole === 'ADMIN'
                                ? `
                        <button class="notice-edit-btn"><div class="rental-icon"><i class="fa-solid fa-trash"></i></div>삭제</button><button class="notice-edit-btn"><div class="rental-icon"><i class="fa-solid fa-pen"></i></div>수정</button>`
                                : ''
                        }
                        
                </section>
            </div>
        </div>
        `;
    }
}
