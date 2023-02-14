import { timerForm } from './timer/timer';

const options = [
    '소프티어 부트캠프 2023',
    '우아한 테크캠프',
    '코드스쿼드 마스터즈 코스',
];

const profile = () => {
    const profileTemplate = `
    <section class="profile-container">
        <div class="image-container">
            <img src="https://ca.slack-edge.com/T04AE6CRWMB-U04GTQ0SHRT-badeda2b168f-512" alt="my-profile">
        </div>
        <div id="check-timer">${timerForm}</div>
        <select class="track-select-container">
        ${options.map((option) => {
            return `<option>${option}</option>`;
        })}
        </select>
        <button class="main-logout-btn">로그아웃</button>
        <button class="main-logout-btn">트랙초대코드생성</button>
    </section>`;
    return profileTemplate;
};

export { profile };
