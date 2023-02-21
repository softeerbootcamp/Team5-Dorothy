import AbstractView from './pageTemplate';
import { pageTitleTamplate } from '../components/pageTitle.js';
import { hourCard } from '../components/rental/hourCard';
import { navigateTo } from '../router';
import { qsa } from '../utils/selector';

const time = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

export default class rentalDetailPage extends AbstractView {
    async getHtml() {
        const param = location.pathname.split('/')[2];
        if (param > 6) navigateTo('/notFound');
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${pageTitleTamplate(
                        '대여를 원하시는 시간대를 선택해주세요',
                    )}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <header class="schedule-header">
                        <div class="schedule-wrapper">
                            <div class="rental-icon"><img class="place-icon" src="/src/assets/${param}.svg"></div>
                            현재 선택 가능한 시간대
                            <div class="rental-left"></div>
                        </div>
                    <header>
                    <section class="time-container">
                        ${time
                            .map((hour) => {
                                return hourCard(hour);
                            })
                            .join('')}
                        <p class="time-container-capt">드래그로 다수의 시간대를 선택할 수 있습니다</p>
                    </section>
                    <button class="rental-confirm">대여할게요</button>
                </section>
            </div>
        </div>
        `;
    }
}
