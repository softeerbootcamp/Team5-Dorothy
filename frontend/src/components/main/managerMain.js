import { weeklyChart } from './chart/weeklyChart.js';
import { dailyChart } from './chart/dailyChart.js';

const options = [
    '현대자동차그룹 소프티어 부트캠프 2023',
    '우아한 테크캠프',
    '코드스쿼드 마스터즈 코스',
];

const managerMain = () => {
    const managerMainTemplate =
        /*html*/
        `
        <div class="content-container">
            <div class="chart-wrapper">출석현황 ></div>
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
        </div>
        <section class="profile-container">
            <div class="image-container"><img src="https://ca.slack-edge.com/T04AE6CRWMB-U04GTQ0SHRT-badeda2b168f-512" alt="my-profile">
            </div>
            <div class="department-container">
                <select class="track-select-container">
                ${options.map((option) => {
                    return `<option>${option}</option>`;
                })}
                </select>
            </div>
        </section>
    `;

    return managerMainTemplate;
};

export { managerMain };
