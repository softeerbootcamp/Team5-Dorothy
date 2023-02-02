import AbstractView from './AbstractView.js';
import placeData from '../components/placeData.js';

export default class rentalPage extends AbstractView {
    constructor() {
        super();
    }
    async getHtml() {
        return `
        <h2>공간대여 하실 건가요?</h2>
        <div class="places-container">
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
                <figcaption class="place-name">방음부스</figcaption>
            </figure>
        </div>
        `;
    }
}
