import { getCurrentWeek } from './chart/currentWeek';
import { profile } from './profileBox';
import { getDayAttendance, getMonthAttendance } from '../../apis/attend';
import { GetAllNotices } from '../../apis/notice';
import { noticePreview } from '../notice/noticeComponents';
import { qs } from '../../utils/selector';

const latelyNotice = async () => {
    const notices = await GetAllNotices();
    const newNotice = notices[0];
    qs('.news-content-wrapper').insertAdjacentHTML(
        'afterbegin',
        noticePreview(newNotice),
    );
};
const weekAttendance = async () => {
    const weekAttendance = await getMonthAttendance(3);
    const length = weekAttendance.length;
    const week = weekAttendance.slice(length - 7, length);
    let i = 0;
    getCurrentWeek()
        .map((day) => {
            const temp = `
            <article class="calendar">
                <div class="calendar-head">
                    <span class="day">${day}</span>
                </div>
                <div class="calendar-week-type">${week[i].type}</div>
            </article>`;
            qs('.calendar-wrapper').insertAdjacentHTML('beforeend', temp);
            i++;
        })
        .join('');
};

const userMain = () => {
    latelyNotice();
    weekAttendance();
    const userMainTemplate =
        /*html*/
        `
        <div class="main-content-container">
            ${profile()}
            <section class="user-content-container">
                <div class="attendance-wrapper"><i class="fa-solid fa-bell-concierge"></i> 나의 출석현황
                    <div class="calendar-wrapper">
                        
                    </div>
                </div>
                <div class="contour"></div>
                <div class="rental-wrapper"><i class="fa-solid fa-person-shelter"></i> 나의 공간대여
                    <div class="rental-card-wrapper">
                        <div class="rental"><div class="rental-icon"><img class="place-icon" src="/src/assets/game.svg" /></div>15:00~15:30</div>
                        <div class="rental"><div class="rental-icon"><img class="place-icon" src="/src/assets/room.svg" /></div>16:00~17:00</div>
                    </div>
                </div>
                <div class="contour"></div>
                <div class="news-wrapper"><i class="fa-regular fa-newspaper new-notice"></i> 최근 공지사항
                </div>
                <table class="news-content-wrapper"></table>
            </section>
        </div>
        `;

    return userMainTemplate;
};

export { userMain };
