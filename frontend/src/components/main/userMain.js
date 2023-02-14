import { getCurrentWeek } from './chart/currentWeek';
import { profile } from './profileBox';

const userMain = () => {
    const userMainTemplate =
        /*html*/
        `
        ${profile()}
        <div class="content-container">
            <div class="attendance-wrapper">내 출석현황 >
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
            <div class="rental-wrapper">내 공간대여현황 >
                <div class="rental-card-wrapper">
                    <div class="rental"><div class="rental-icon"><img class="place-icon" src="/src/assets/game.svg"></img></div>15:00~15:30</div>
                    <div class="rental"><div class="rental-icon"><img class="place-icon" src="/src/assets/room.svg"></img></div>16:00~17:00</div>
                </div>
            </div>
    </div>

    `;
    return userMainTemplate;
};

export { userMain };
