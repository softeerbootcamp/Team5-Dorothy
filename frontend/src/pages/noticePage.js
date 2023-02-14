import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
import noticeData from '../components/notice/noticeInfo.js';
import { noticePreview } from '../components/notice/noticeComponents.js';

export default class noticePage extends AbstractView {
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
                    <table >
                    <thead>
                        <tr class="notice-wrapper">
                            <th class="notice-id">id</th><th class="notice-title">title</th><th class="notice-date">date</th><th class="notice-watch">view</th>
                        </tr>
                    </thead>
                    ${noticeData
                        .map((notice) => {
                            return noticePreview(notice.title);
                        })
                        .join('')}
                    </table>
                </section>
            </div>
        </div>
        `;
    }
}
