import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
import { makeCalendar } from '../components/calendar/calendar.js';
import { daysOfWeek } from '../components/calendar/constants.js';

export default class attendPage extends AbstractView {
    async getHtml() {
        const now = new Date();

        return `
        <div class="container">
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
                            <span class="month-wrapper">
                            ${now.getMonth() + 1}
                            </span>
                        </div>
                        <i class="fa-solid fa-circle-right fa-2x"></i>
                    </header>
                    <div class='calendar-container'>
                    ${makeCalendar(now)}
                    </div>
                </section> 
            </div>
        </div>
        `;
    }
}
