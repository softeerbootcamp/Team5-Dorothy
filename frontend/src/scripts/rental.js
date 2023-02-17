import { navigateTo } from '../router';
import { qs } from '../utils/selector';
import { qsa } from '../utils/selector';

const setRentalEvent = () => {
    qs('.big-content-container').addEventListener('click', (e) => {
        linkToRentalDetail(e);
    });
};

const linkToRentalDetail = (e) => {
    if (e.target.closest('.place-wrapper') === null) return;
    const cardID = e.target.closest('.place-wrapper').getAttribute('data-set');
    navigateTo('/rental/' + cardID);
};

export { setRentalEvent };
