import AbstractView from './pageTemplate';

export default class mainPage extends AbstractView {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    <h2>안녕하세요, 사용자님!</h2>
                </div>
                <div class="content-container">
                    <div class="attendance-wrapper"><span>> 내 출석현황</span>
                        <div class="calendar-wrapper">
                            <article class="calendar"><div class="calendar-head">5<span class="day">Sun</span></div></article>
                            <article class="calendar"><div class="calendar-head">6<span class="day">Mon</span></div></article>
                            <article class="calendar"><div class="calendar-head">7<span class="day">Tue</span></div></article>
                            <article class="calendar"><div class="calendar-head">8<span class="day">Wed</span></div></article>
                            <article class="calendar"><div class="calendar-head">9<span class="day">Thu</span></div></article>
                            <article class="calendar"><div class="calendar-head">10<span class="day">Fri</span></div></article>
                            <article class="calendar"><div class="calendar-head">11<span class="day">Sat</span></div></article>
                        </div>
                    </div>
                    <div class="contour"></div>
                    <div class="rental-wrapper">> 내 공간대여현황
                        <div class="rental-card-wrapper">
                            <div class="rental"><div class="rental-icon"><img class="place-icon" src="/src/assets/game.svg"></img></div>15:00~15:30</div>
                            <div class="rental"><div class="rental-icon"><img class="place-icon" src="/src/assets/room.svg"></img></div>16:00~17:00</div>
                        </div>
                    </div>
                    <div class="contour"></div>
                    <div class="chart-wrapper">> 전체 출석현황
                        <div class="attend-ratio-wrapper">
                            <div class="block"></div>
                            <div class="block"></div>
                            <div class="block"></div>
                        </div>
                        <ul class="legend">
                            <li>출석</li>
                            <li>지각</li>
                            <li>결석</li>
                        </ul>
                    </div>
                </div>
                <section class="profile-container">
                    <div class="image-container"><img src="" alt="my-profile"></div>
                    <div class="department-container">
                        <select class="track-select-container">
                            <option value="1">현대자동차그룹 소프티어 부트캠프 2023</option>
                            <option value="2">우아한 테크캠프</option>
                            <option value="3">코드스쿼드 마스터즈 코스</option>
                        </select>
                        <div class="team-container">웹 프론트엔드</div>
                    </div>
                </section>
            </div>
        </div>
        `;
    }
}
