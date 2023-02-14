import { navigateTo } from '../router';

const setRentalEvent = () => {
    document.addEventListener('click', (e) => {
        navigator(e);
    });
};

const navigator = (e) => {
    if (e.target.closest('figure') === null) return;
    const cardID = e.target.closest('.place-wrapper').getAttribute('data-set');
    navigateTo('/rental/' + cardID);
};
export { setRentalEvent };
