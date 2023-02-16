import { getCurrentWeek } from './chart/currentWeek';
import { profile } from './profileBox';
import { getDayAttendance } from '../../apis/attend';

const userMain = () => {
    const userMainTemplate =
        /*html*/
        `
        <div class="main-content-container">
            ${profile()}
            <section class="user-content-container">
                <div class="attendance-wrapper"><i class="fa-solid fa-bell-concierge"></i> 나의 출석현황
                    <div class="calendar-wrapper">
                        ${getCurrentWeek()
                            .map((day) => {
                                return `<article class="calendar">
                                            <div class="calendar-head">
                                                <span class="day">${day}</span>
                                            </div>
                                        </article>`;
                            })
                            .join('')}
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
                <div class="news-wrapper"><i class="fa-regular fa-newspaper"></i> 최근 공지사항
                </div>
            </section>
        </div>
        `;

    return userMainTemplate;
};

export { userMain };
