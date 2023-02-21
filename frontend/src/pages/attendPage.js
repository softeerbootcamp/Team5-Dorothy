import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
import { yearOption, makeCalendar } from '../components/calendar/calendar.js';
import { getDayAttendance } from '../apis/attend.js';
import { userRole } from '../store/user.js';
import { qs } from '../utils/selector.js';
import { daysOfWeek } from '../components/calendar/constants.js';

const memberAttendance = async (attendType) => {
    const datas = await getDayAttendance(sessionStorage.getItem('trackId'));
    const dataAvailable = datas.filter((data) => {
        return data.type.toString() === attendType;
    });
    const result = dataAvailable
        .map((data) => {
            return `
        <div class="attendance-name-card">
            <span class="attendance-name">${data.name}</span>
        </div>
        `;
        })
        .join('');
    qs(`#attendance-${attendType}`).insertAdjacentHTML('beforeend', result);
};
const memberAttend = () => {
    const now = new Date();
    const memberCalendar = `
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
    return memberCalendar;
};
const adminAttend = () => {
    const now = new Date();
    const presentBody = memberAttendance('PRESENT');
    const tardyBody = memberAttendance('TARDY');
    const absentBody = memberAttendance('ABSENT');

    const adminAttendance = `
    <header class="attendance-header">
        <span class="header-date-wrapper">
            ${now.getMonth() + 1}월
        </span>
        <span class="header-date-wrapper">
            ${now.getDate()}일
        </span>
        <span class="header-date-wrapper">
            ${daysOfWeek[now.getDay()]}
        </span>
    </header>
    <section class='attendance-container'>
        <section class="attendance-today-wrapper" id="attendance-PRESENT">
            <div class="attendance-wrapper-header">출석</div>
        </section>
        <section class="attendance-today-wrapper" id="attendance-TARDY">
            <div class="attendance-wrapper-header">지각</div>
        </section>
        <section class="attendance-today-wrapper" id="attendance-ABSENT">
            <div class="attendance-wrapper-header">결석</div>
        </section>
    </section>
    `;
    return adminAttendance;
};

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
                    ${userRole() === 'MEMBER' ? memberAttend() : adminAttend()}
                </section>
            </div>
        </div>
        `;
    }
}
