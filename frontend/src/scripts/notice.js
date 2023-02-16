import { navigateTo } from '../router';
import { qs } from '../utils/selector';

const setNoticeEvent = () => {
    qs('.big-content-container').addEventListener('click', (e) => {
        navigator(e);
    });
};

const navigator = (e) => {
    if (e.target.closest('tr') === null) return;
    const cardID = e.target.closest('tr').getAttribute('data-set');
    navigateTo('/notice/' + cardID);
};
export { setNoticeEvent };
