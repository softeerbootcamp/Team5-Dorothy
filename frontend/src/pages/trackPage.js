import AbstractView from './AbstractView.js';
import { pageTitleTamplate } from '../components/pageTitle.js';

export default class trackPage extends AbstractView {
    constructor() {
        super();
    }
    async getHtml() {
        return `
        ${pageTitleTamplate('트랙을 선택해주세요')}
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
        `;
    }
}
