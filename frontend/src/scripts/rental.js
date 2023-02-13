import { $ } from '../utils/selector';
import { navigateTo } from '../router';

const setRentalEvent = () => {
    document.addEventListener('click', (e) => {
        navigator(e);
    });
};

const navigator = (e) => {
    const cardID = e.target.closest('figure').getAttribute('data-set');
    navigateTo('/rental/' + cardID);
};
export { setRentalEvent };
