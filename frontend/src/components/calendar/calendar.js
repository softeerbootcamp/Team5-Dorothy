import { daysOfWeek } from './constants';

let currentDate;

const makeCalendar = (date) => {
    currentDate = date;
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;

    const firstDay = new Date(date.setDate(1)).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let htmlDummy = '';

    daysOfWeek.map((day) => {
        htmlDummy += `<div class="${day} dayofWeek">${day}</div>`;
    });
    for (let i = 0; i < firstDay; i++) {
        htmlDummy += `<div class="no-color"></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        htmlDummy += `<div class="day-wrapper">${i}</div>`;
    }
    for (let i = limitDay; i < nextDay; i++) {
        htmlDummy += `<div class="no-color"></div>`;
    }
    return htmlDummy;
};

function setCalendarEvent() {
    const calendarYear = document.querySelector('.year-wrapper');
    const calendarMonth = document.querySelector('.month-wrapper');
    const prevButton = document
        .querySelector('.prevDay')
        .addEventListener('click', () => {
            document.querySelector('.calendar-container').innerHTML =
                makeCalendar(
                    new Date(currentDate.setMonth(currentDate.getMonth() - 1)),
                );
            console.log(new Date(currentDate.setMonth(currentDate.getMonth())));
            if (parseInt(calendarMonth.innerText) === 1) {
                calendarYear.innerText = parseInt(calendarYear.innerText) - 1;
                calendarMonth.innerText = 12;
            } else {
                calendarMonth.innerText = parseInt(calendarMonth.innerText) - 1;
            }
        });
    const nextButton = document
        .querySelector('.nextDay')
        .addEventListener('click', () => {
            document.querySelector('.calendar-container').innerHTML =
                makeCalendar(
                    new Date(currentDate.setMonth(currentDate.getMonth() + 1)),
                );
            console.log(new Date(currentDate.setMonth(currentDate.getMonth())));
            if (parseInt(calendarMonth.innerText) === 12) {
                calendarYear.innerText = parseInt(calendarYear.innerText) + 1;
                calendarMonth.innerText = 1;
            } else {
                calendarMonth.innerText = parseInt(calendarMonth.innerText) + 1;
            }
        });
}

export { makeCalendar, setCalendarEvent };
