const userMain = () => {
    const userMainTemplate =
        /*html*/
        `
    <div class="attendance-wrapper">내 출석현황 >
        <div class="calendar-wrapper">
            ${daysOfWeek
                .map((day) => {
                    return `
                    <div class="contour">
                    <article class="calendar">
                            <div class="calendar-head">5<span class="day">${day}</span>
                            </div>
                        </article></div>`;
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
    `;
    return userMainTemplate;
};

export { userMain };
