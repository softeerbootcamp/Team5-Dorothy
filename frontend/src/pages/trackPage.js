import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
import trackInfo from '../components/track/trackInfo.js';
import { trackCard } from '../components/track/trackCard.js';

export default class trackPage extends AbstractView {
    async getHtml() {
        return /*html */ `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${pageTitleTamplate('트랙을 선택하세요')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <section class="track-container">
                        ${trackInfo
                            .map((track) => {
                                return trackCard(track.img, track.name);
                            })
                            .join('')}
                        <figure class="track-add" id="track-make">
                            <div class="track-front">
                                <i class="fa-solid fa-circle-plus track-add-icon"></i>
                                <figcaption class="track-name">트랙 추가하기</figcaption>
                            </div>
                            <div class="track-back">
                                <p class="track-body">새로운 트랙의 제목을 입력해주세요</p>
                                <input class="track-input" id="track-title" type="text" placeholder="새로운 트랙" />
                                <button class="track-button" disabled="true">생성</button>
                            </div>
                        </figure>
                        <figure class="track-add" id="track-join">
                            <div class="track-front">
                                <i class="fa-solid fa-person-circle-plus"></i>
                                <figcaption class="track-name">트랙 참가하기</figcaption>
                            </div>
                            <div class="track-back">
                                <p class="track-body">참가할 트랙의 코드를 입력해주세요</p>
                                <input class="track-input" id="track-code" type="text" placeholder="초대 코드" />
                                <button class="track-button" disabled="true">참가</button>
                            </div>
                        </figure>
                    </section>
                </section>
            </div>
        </div>
        `;
    }
}
