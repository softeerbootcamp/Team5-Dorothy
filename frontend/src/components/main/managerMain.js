import { weeklyChart } from './chart/weeklyChart.js';
import { dailyChart } from './chart/dailyChart.js';
import { profile } from './profileBox.js';

const managerMain = async () => {
    const managerMainTemplate =
        /*html*/
        `
        <div class="main-content-container">
        ${await profile()}
            <section class="user-content-container">
            <div class="attendance-wrapper"><i class="fa-solid fa-bell-concierge"></i> 출석현황 ></div>
            <div class='manager-main-btn-wrapper'>
                <button class="daily-chart-btn">일간</button>
                <button class="weekly-chart-btn">주간</button>
            </div>
            ${dailyChart()}  ${weeklyChart()}
            <ul class="legend">
                <li>출석</li>
                <li>지각</li>
                <li>결석</li>
            </ul>
            </section>
        </div>
    `;

    return managerMainTemplate;
};

export { managerMain };
