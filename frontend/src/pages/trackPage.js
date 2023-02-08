import AbstractView from './AbstractView.js';
import { pageTitleTamplate } from '../components/pageTitle.js';

export default class trackPage extends AbstractView {
    async getHtml() {
        return `
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
                        <figure class="track-wrapper">
                            <img class="track-image" src="/src/assets/chair.svg"></img>
                            <figcaption class="track-name">현대자동차그룹 소프티어 부트캠프 2023</figcaption>
                        </figure>
                        <figure class="track-wrapper">
                            <img class="track-image" src="/src/assets/chair.svg"></img>
                            <figcaption class="track-name">현대자동차그룹 소프티어 부트캠프 2023</figcaption>
                        </figure>
                        
                    </section>
                </section>
            </div>
        </div>
        `;
    }
}
