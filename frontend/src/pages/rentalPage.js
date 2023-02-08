import AbstractView from './AbstractView.js';
import placeData from '../components/placeInfo.js';
import { pageTitleTamplate } from '../components/pageTitle.js';

export default class rentalPage extends AbstractView {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${pageTitleTamplate('공간대여 하실 건가요?')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <div class="place-container">
                        <figure class="place-wrapper">
                            <img class="place-image" src="/src/assets/chair.svg"></img>
                            <figcaption class="place-name">휴식실</figcaption>
                        </figure>
                        <figure class="place-wrapper">
                            <img class="place-image" src="/src/assets/room.svg"></img>
                            <figcaption class="place-name">교실</figcaption>
                        </figure>
                        <figure class="place-wrapper">
                            <img class="place-image" src="/src/assets/soundless.svg"></img>
                            <figcaption class="place-name">방음부스</figcaption>
                        </figure>
                        <figure class="place-wrapper">
                            <img class="place-image" src="/src/assets/game.svg"></img>
                            <figcaption class="place-name">플레이스테이션</figcaption>
                        </figure>
                        <figure class="place-wrapper">
                            <img class="place-image" src="/src/assets/coffee.svg"></img>
                            <figcaption class="place-name">커피메이커</figcaption>
                        </figure>
                        <figure class="place-wrapper">
                            <img class="place-image" src="/src/assets/bookshelf.svg"></img>
                            <figcaption class="place-name">전문서적</figcaption>
                        </figure>
                    </div>
                </section>
            </div>
        </div>
        `;
    }
}
