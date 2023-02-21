import { timerForm } from './timer/timer';
import { userRole } from '../../store/user';
import { GetTrack, GetTrackCode } from '../../apis/track';
import { qs } from '../../utils/selector';

const profileOption = async () => {
    const options = await GetTrack();
    const optionBox = `${options
        .map((option) => {
            return `<option value="${option.idx}">${option.name}</option>`;
        })
        .join('')}`;
    qs('.track-select-container').insertAdjacentHTML('afterbegin', optionBox);
};

const profile = () => {
    const profileTemplate = `
        <section class="profile-container">
            <div class="image-container">
                <img src="https://post-phinf.pstatic.net/MjAyMDExMTBfMjIg/MDAxNjA0OTk3NTY4NjM0.3A9-_lpgGOxNGW5aSaSThzIaHqJruwwgzExYBTL39Sgg.MVSuotrq69p-remDC1RaHefZ_Tt7uZ-W68MII7AKTd0g.JPEG/image_9055787501604997304426.jpg?type=w1200" alt="my-profile">
            </div>
            <select class="track-select-container" onchange='changeTrack()'>
                ${profileOption()}
            </select>
            <div class="main-button-wrapper">
            ${
                userRole() === 'MEMBER'
                    ? `<figure class="main-button">
                        <div class="main-button-back">
                            <p>초대 코드 입력</p>
                            <div class="user-track-input">
                                <input
                                    class="main-track-input"
                                    id="track-id"
                                    type="text"
                                    placeholder="ID"
                                />
                                <input
                                    class="main-track-input"
                                    id="track-code"
                                    type="text"
                                    placeholder="초대 코드"
                                />
                            </div>
                            <div class="main-button-btn-wrapper">
                                <button class="main-button-btn" id="main-button-confirm">등록</button>
                                <button class="main-button-btn" id="main-button-cancel">취소</button>
                            </div>
                        </div>
                        <div class="main-button-front">트랙 참가하기</div>
                    </figure>`
                    : `
                    <figure class="main-button">
                        <div class="main-button-back">
                            <p>새로운 트랙 이름 입력</p>
                            <input
                                class="main-track-input"
                                id="track-name-input"
                                type="text"
                                placeholder="새로운 트랙의 이름"
                            />
                            <div class="main-button-btn-wrapper">
                                <button class="main-button-btn" id="main-button-generate">등록</button>
                                <button class="main-button-btn" id="main-button-cancel">취소</button>
                            </div>
                        </div>
                        <div class="main-button-front">새로운 트랙 생성</div>
                    </figure>
                    <figure class="main-button">
                        <div class="main-button-back">
                            <p>현재 트랙 초대 코드: <span id="track-invite-id"></span></p>
                            <p id="track-invite-code"></p>
                            <div class="main-button-btn-wrapper">
                                <button class="main-button-btn" id="main-code-copy">복사</button>
                                <button class="main-button-btn" id="main-button-cancel">취소</button>
                            </div>
                        </div>
                        <div class="main-button-front" id="track-code-call">초대 코드 생성</div>
                    </figure>`
            }
            </div>
        </section>`;

    return profileTemplate;
};

export { profile };
