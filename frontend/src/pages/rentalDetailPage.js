import AbstractView from './pageTemplate';
import { pageTitleTamplate } from '../components/pageTitle.js';

export default class rentalDetailPage extends AbstractView {
    async getHtml() {
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
                            <div class="rental-icon"><img class="place-icon" src="/src/assets/chair.svg"></div>
                            현재 선택 가능한 시간대
                            <div class="rental-left">48</div>
                        </div>
                    <header>
                    <section class="time-container">
                        <div class="time-line">
                            <h6 class="time-hour">10시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                            <h6 class="time-hour">11시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                        </div>
                        <div class="time-line">
                            <h6 class="time-hour">12시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                            <h6 class="time-hour">13시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                        </div>
                        <div class="time-line">
                            <h6 class="time-hour">14시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                            <h6 class="time-hour">15시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                        </div>
                        <div class="time-line">
                            <h6 class="time-hour">16시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                            <h6 class="time-hour">17시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                        </div>
                        <div class="time-line">
                            <h6 class="time-hour">18시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                            <h6 class="time-hour">19시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                        </div>
                    </section>
                    <button class="rental-confirm">대여할게요</button>
                </section>
            </div>
        </div>
        `;
    }
}
