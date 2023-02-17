import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
import { yearOption, makeCalendar } from '../components/calendar/calendar.js';
import { getDayAttendance } from '../apis/attend.js';
import { userRole } from '../store/user.js';
import { qs } from '../utils/selector.js';

const memberAttend = () => {
    const now = new Date();
    const member = `
    <header class="calendar-header">
        <i class="fa-solid fa-circle-left fa-2x prevDay"></i>
        <div class="month-container">
            <select class="year-wrapper">
                ${yearOption(now)}
            </select>
            <span class="month-wrapper">
            ${now.getMonth() + 1}
            </span>
        </div>
        <i class="fa-solid fa-circle-right fa-2x nextDay"></i>
    </header>
    <div class='calendar-container'>
    ${makeCalendar(now)}
    </div>`;
    return member;
};

const adminAttend = async () => {
    const datas = await getDayAttendance(3);
    console.log(datas);
    const admin = datas
        .map((data) => {
            return `
            <div>
            <span>${data.name}</span>
            <span>${data.type}</span>
            </div>
            `;
        })
        .join('');
    qs('.big-content-container').insertAdjacentHTML('beforeend', admin);
};

if (userRole() === 'ADMIN') {
    adminAttend();
}

export default class attendPage extends AbstractView {
    async getHtml() {
        return `
        <div class="container">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                ${
                    userRole() === 'MEMBER'
                        ? pageTitleTamplate('월간 출석체크')
                        : pageTitleTamplate('오늘 출석체크')
                }

                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    ${userRole() === 'MEMBER' ? memberAttend() : ''}
                </section> 
            </div>
        </div>
        `;
    }
}
