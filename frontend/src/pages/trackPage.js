import AbstractView from './AbstractView.js';
import { pageTitleTamplate } from '../components/pageTitle.js';

export default class trackPage extends AbstractView {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${pageTitleTamplate('트랙을 선택해주세요')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <div class="places-container">
                        <figure class="place-wrapper">
                            <img class="place-image" src="/src/assets/chair.svg"></img>
                            <figcaption class="place-name">소프티어부트캠프</figcaption>
                        </figure>
                        <figure class="place-wrapper">
                            <img class="place-image" src="/src/assets/room.svg"></img>
                            <figcaption class="place-name">소프티어부트캠프</figcaption>
                        </figure>
                        <figure class="place-wrapper">
                            <img class="place-image" src="/src/assets/soundless.svg"></img>
                            <figcaption class="place-name">소프티어부트캠프</figcaption>
                        </figure>
                        <figure class="place-wrapper">
                            <img class="place-image" src="/src/assets/game.svg"></img>
                            <figcaption class="place-name">소프티어부트캠프</figcaption>
                        </figure>
                    </div>
                </section>
            </div>
        </div>
        `;
    }
}
