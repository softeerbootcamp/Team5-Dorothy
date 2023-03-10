import { weeklyChart } from './chart/weeklyChart.js';
import { dailyChart } from './chart/dailyChart.js';
import { profile } from './profileBox.js';

const managerMain = () => {
    const managerMainTemplate =
        /*html*/
        `
        <div class="main-content-container">
        ${profile()}
            <section class="user-content-container">
            <div class="attendance-wrapper"><i class="fa-solid fa-magnifying-glass-chart"></i> 출석 통계 ></div>
            <div class='manager-main-btn-wrapper'>
                <button class="daily-chart-btn">일간</button>
                <button class="weekly-chart-btn">주간</button>
            </div>
            ${dailyChart()}  ${weeklyChart()}
            <ul class="legend">
                <li class='attend-block'>출석</li>
                <li class='late-block'>지각</li>
                <li class='absent-block'>결석</li>
            </ul>
            </section>
        </div>
    `;

    return managerMainTemplate;
};

export { managerMain };
