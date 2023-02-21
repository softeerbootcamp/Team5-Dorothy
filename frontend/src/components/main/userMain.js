import { getCurrentWeek } from './chart/currentWeek';
import { profile } from './profileBox';
import { getDayAttendance, getMonthAttendance } from '../../apis/attend';
import { GetAllNotices } from '../../apis/notice';
import { noticePreview } from '../notice/noticeComponents';
import { getMyReserved } from '../../apis/rental';
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
    const weekAttendance = await getMonthAttendance(
        sessionStorage.getItem('trackId'),
    );
    const length = weekAttendance.length;
    const week = weekAttendance.slice(length - 7, length);
    while (week.length < 7) {
        week.push(undefined);
    }
    week.reverse();
    console.log(week);
    let i = 0;
    qs('.calendar-wrapper').innerHTML = '';
    getCurrentWeek()
        .map((day) => {
            const temp = `
            <article class="calendar">
                <div class="calendar-head">
                    <span class="day">${day}</span>
                </div>
                <div class="calendar-week-type">
                    ${
                        week[i] !== undefined
                            ? `<img class="calendar-image" src="src/assets/${week[i].type}.svg" />`
                            : ``
                    }
                </div>
            </article>`;
            qs('.calendar-wrapper').insertAdjacentHTML('beforeend', temp);
            i++;
        })
        .join('');
};
const myReservation = async () => {
    const myReserveLog = await getMyReserved();
    myReserveLog.data.map((rentalLog) => {
        const rentalCard = `
        <div class="rental">
            <div class="rental-icon">
                <img class="place-icon" src="/src/assets/${rentalLog.placeIdx}.svg" />
            </div>
            ${rentalLog.startTime}~${rentalLog.endTime}
        </div>
        `;
        qs('.rental-card-wrapper').insertAdjacentHTML('beforeend', rentalCard);
    });
};

const userMain = () => {
    latelyNotice();
    weekAttendance();
    myReservation();
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

export { userMain, weekAttendance };
