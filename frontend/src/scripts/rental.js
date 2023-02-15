import { navigateTo } from '../router';

const setRentalEvent = () => {
    document.addEventListener('click', (e) => {
        linkToRentalDetail(e);
    });
};

const setRentalDetailEvent = () => {
    document.addEventListener('mousedown', (e) => {
        console.log(e.target);
        selectOption(e);
    });
    document.addEventListener('mousedown', (e) => {
        mousedown(e);
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

const selectOption = (e) => {};

let selectTimeOption = null;

function mousedown(e) {
    let currentOption = e.target.closest('.time-box');
    console.log('mousedown', currentOption);
    currentOption.classList.add('time-box-select');
}
function mouseup(e) {
    let currentOption = e.target.closest('.time-box');
    console.log('mouseup', currentOption);
    currentOption.classList.add('time-box-select');
}
export { setRentalEvent, setRentalDetailEvent };
