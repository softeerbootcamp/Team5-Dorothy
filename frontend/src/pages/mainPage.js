import AbstractView from './pageTemplate';
import { timerForm } from '../components/main/timer/timer.js';
import { daysOfWeek } from '../components/calendar/constants.js';
import { pageTitleTamplate } from '../components/pageTitle';
import { makeChart } from '../components/main/chart/chart';

export default class mainPage extends AbstractView {
    async getHtml() {
        /*html*/
        return `
        <div class="container">
            <div class="main-wrapper">
                <h1 class="title-wrapper Mini">DOROTHY</h1>
                <div class="name-wrapper">
                ${pageTitleTamplate('안녕하세요, 사용자님!')}
                </div>
                <div class="content-container">
                    <div class="attendance-wrapper">내 출석현황 >
                        <div class="calendar-wrapper">
                        ${daysOfWeek
                            .map((day) => {
                                return `<article class="calendar">
                                    <div class="calendar-head">
                                        5<span class="day">${day}</span>
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
                    <div class="contour"></div>
                    <div class="chart-wrapper">전체 출석현황 >
                        
                        <div class="attend-ratio-wrapper">${makeChart()}
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
                    <div class="image-container"><img src="https://ca.slack-edge.com/T04AE6CRWMB-U04GTQ0SHRT-badeda2b168f-512" alt="my-profile">
                    <div id="check-timer">${timerForm()}</div>
                    </div>
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
