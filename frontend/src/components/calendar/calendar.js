import { daysOfWeek } from './constants';
import { getMonthAttendance } from '../../apis/attend';
import { qs, qsa } from '../../utils/selector';

const monthTest = async (currentYear, currentMonth) => {
    const myMonthAttendance = await getMonthAttendance(
        sessionStorage.getItem('trackId'),
    );
    const length = myMonthAttendance.length;
    if (currentYear !== 2023 || currentMonth !== 2) return;
    for (let i = 0; i <= length; i++) {
        qs(
            `.today-state-${i + 1}`,
        ).innerHTML = `<img class="calendar-month-image" src="src/assets/${myMonthAttendance[i].type}.svg" />`;
    }
};

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
        htmlDummy += `<div class='day-wrapper'>${i}<span class='today-state-${i}'></span></div>`;
    }
    for (let i = limitDay; i < nextDay; i++) {
        htmlDummy += `<div class="no-color"></div>`;
    }
    monthTest(currentYear, currentMonth);
    return htmlDummy;
};

const yearOption = (date) => {
    const currentYear = new Date(date).getFullYear();
    let optionDummy = '';

    for (let i = 3; i >= 1; i--) {
        optionDummy += `<option value="${currentYear - i}">${
            currentYear - i
        }</option>`;
    }
    optionDummy += `<option value="${currentYear}" selected>${currentYear}</option>`;
    for (let i = 1; i <= 3; i++) {
        optionDummy += `<option value="${currentYear + i}">${
            currentYear + i
        }</option>`;
    }

    return optionDummy;
};

function setCalendarEvent() {
    const calendarYear = document.querySelector('.year-wrapper');
    const calendarMonth = document.querySelector('.month-wrapper');
    calendarYear.onchange = function () {
        document.querySelector('.calendar-container').innerHTML = makeCalendar(
            new Date(currentDate.setYear(this.value)),
        );
        calendarYear.innerHTML = yearOption(currentDate);
    };
    const prevButton = document
        .querySelector('.prevDay')
        .addEventListener('click', () => {
            document.querySelector('.calendar-container').innerHTML =
                makeCalendar(
                    new Date(currentDate.setMonth(currentDate.getMonth() - 1)),
                );
            if (parseInt(calendarMonth.innerText) === 1) {
                calendarYear.innerHTML = yearOption(
                    currentDate.setYear(currentDate.getFullYear()),
                );
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
            if (parseInt(calendarMonth.innerText) === 12) {
                calendarYear.innerHTML = yearOption(
                    currentDate.setYear(currentDate.getFullYear()),
                );
                calendarMonth.innerText = 1;
            } else {
                calendarMonth.innerText = parseInt(calendarMonth.innerText) + 1;
            }
        });
}

export { makeCalendar, yearOption, setCalendarEvent };
