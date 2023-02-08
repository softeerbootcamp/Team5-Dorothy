import AbstractView from './pageTemplate';
import placeData from '../components/placeInfo.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
import { placeCard } from '../components/rental/placeCard.js';

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
                    ${placeData.map((place) => {
                        return placeCard(place.name, place.img);
                    })}
                    </div>
                </section>
            </div>
        </div>
        `;
    }
}
