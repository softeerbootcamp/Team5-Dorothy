import { timerForm } from './timer/timer';
import { userRole } from '../../store/user';
import { GetTrack } from '../../apis/track';

const profileOption = async () => {
    const options = await GetTrack();
    const optionBox = `${
        options.length !== 0
            ? options.map((option) => {
                  return `<option>${option.name}</option>`;
              })
            : ''
    }`;
    return optionBox;
};

const profile = () => {
    const profileTemplate = /*html*/ `
        <section class="profile-container">
            <div class="image-container">
                <img src="https://ca.slack-edge.com/T04AE6CRWMB-U04GTQ0SHRT-badeda2b168f-512" alt="my-profile">
            </div>
            ${userRole() === 'ADMIN' ? '' : timerForm()}
            <select class="track-select-container">
                ${profileOption()}
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
