import AbstractView from './pageTemplate';
import placeData from '../components/rental/placeInfo.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
import { placeCard } from '../components/rental/placeCard.js';
import { GetRental } from '../apis/rental';

export default class rentalPage extends AbstractView {
    async getHtml() {
        const rentalInfo = await GetRental();
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
                    <section class="rental-show-container">
                        <div class="scroll-left"><i class="fa-solid fa-circle-chevron-left"></i></div>
                        <div class="places-container">
                        ${rentalInfo.data
                            .map((place) => {
                                return placeCard(place.idx, place.name);
                            })
                            .join('')}
                        </div>
                        <div class="scroll-right"><i class="fa-solid fa-circle-chevron-right"></i></div>
                    </section>
                </section>
            </div>
        </div>
        `;
    }
}
