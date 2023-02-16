import { timerForm } from './timer/timer';

const options = [
    '소프티어 부트캠프 2023',
    '우아한 테크캠프',
    '코드스쿼드 마스터즈 코스',
];

const profile = () => {
    const profileTemplate = /*html*/ `
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
            <div class="main-button-wrapper">
                <figure class="main-button">
                    <div class="main-button-back">
                        <p>초대 코드 입력</p>
                        <input class="main-track-input" id="track-code" type="text" placeholder="초대 코드" />
                        <div class="main-button-btn-wrapper">
                            <button class="main-button-btn">등록</button>
                            <button class="main-button-btn">취소</button>
                        </div>
                    </div>
                    <div class="main-button-front">트랙 참가하기</div>
                </figure>
            </div>
        </section>`;
    return profileTemplate;
};

export { profile };
