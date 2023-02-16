import { navigateTo } from '../router';
import { qs } from '../utils/selector';
import { qsa } from '../utils/selector';

const setRentalEvent = () => {
    document.addEventListener('click', (e) => {
        linkToRentalDetail(e);
    });
};

const setRentalDetailEvent = () => {
    const allTimeBox = [...qsa('.time-box')];
    document.addEventListener('mousedown', (e) => {
        mousedown(e);
    });
    document.addEventListener('mousemove', (e) => {
        mousemove(e);
    });
    document.addEventListener('mouseup', (e) => {
        mouseup(e);
    });
};

const linkToRentalDetail = (e) => {
    if (e.target.closest('.place-wrapper') === null) return;
    const cardID = e.target.closest('.place-wrapper').getAttribute('data-set');
    navigateTo('/rental/' + cardID);
};

let startOption = null;
let endOption = null;

const selectOption = (e) => {};

function mousedown(e) {
    startOption = e.target.closest('.time-box');
    startOption.classList.toggle('time-box-select');
}

function mouseup(e) {
    endOption = e.target.closest('.time-box');
    if (endOption === null || startOption === endOption) return;
    endOption.classList.toggle('time-box-select');
}

export { setRentalEvent, setRentalDetailEvent };
