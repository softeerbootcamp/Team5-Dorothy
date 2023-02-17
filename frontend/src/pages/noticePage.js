import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
//import noticeData from '../components/notice/noticeInfo.js';
import { noticePreview } from '../components/notice/noticeComponents.js';
import { GetAllNotices } from '../apis/notice.js';
import { userRole } from '../store/user.js';

export default class noticePage extends AbstractView {
    async getHtml() {
        const noticeData = await GetAllNotices();
        return /*html */ `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${pageTitleTamplate('공지사항')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <div class="notice-container">
                        <table>
                            <thead>
                                <tr>
                                    <th class="notice-id">ID</th>
                                    <th class="notice-title">제목</th>
                                    <th class="notice-date">날짜</th>
                                    <th class="notice-watch">조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${noticeData
                                    .map((notice) => {
                                        return noticePreview(notice);
                                    })
                                    .join('')}
                            </tbody>
                        </table>
                    </div>
                    ${
                        userRole() === 'ADMIN'
                            ? `<button class="add-notice-btn">+</button>`
                            : ''
                    }
                </section>
                
            </div>
        </div>
        `;
    }
}
