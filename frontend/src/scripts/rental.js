import { navigateTo } from '../router';
import { qs } from '../utils/selector';

const setRentalEvent = () => {
    qs('.places-container').addEventListener('click', (e) => {
        navigator(e);
    });
};

const navigator = (e) => {
    if (e.target.closest('figure') === null) return;
    const cardID = e.target.closest('.place-wrapper').getAttribute('data-set');
    navigateTo('/rental/' + cardID);
};
export { setRentalEvent };
