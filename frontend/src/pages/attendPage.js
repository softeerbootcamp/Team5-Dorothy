import AbstractView from './AbstractView.js';
import { pageTitleTamplate } from '../components/pageTitle.js';

export default class attendPage extends AbstractView {
    async getHtml() {
        const now = new Date();

        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${pageTitleTamplate('월간 출석체크')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <header class="calendar-header">
                        <i class="fa-solid fa-circle-left fa-2x"></i>
                        <div class="month-container">
                            <span class="year-wrapper">${now.getFullYear()}</span>
                            <span class="month-wrapper">${
                                now.getMonth() + 1
                            }</span>
                        </div>
                        <i class="fa-solid fa-circle-right fa-2x"></i>
                    </header>
                    <section class="month-calendar-wrapper">
                        <div class="weekday">
                            <span class="sunday">SUN</span>
                            <span class="monday">MON</span>
                            <span class="tuesday">TUE</span>
                            <span class="wednesday">WED</span>
                            <span class="thursday">THU</span>
                            <span class="friday">FRI</span>
                            <span class="saturday">SAT</span>
                        </div>
                        <section class="week-wrapper">
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                        </section>
                        <section class="week-wrapper">
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                        </section>
                        <section class="week-wrapper">
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                        </section>
                        <section class="week-wrapper">
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                        </section>
                        <section class="week-wrapper">
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                            <figure class="day-wrapper">1</figure>
                        </section>
                    </section>
                </section>
            </div>
        </div>
        `;
    }
}
