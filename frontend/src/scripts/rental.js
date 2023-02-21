import { navigateTo } from '../router';
import { qs, qsa } from '../utils/selector';

const setRentalEvent = () => {
    let scrollMoving;

    qs('.big-content-container').addEventListener('click', (e) => {
        linkToRentalDetail(e);
    });

    qs('.scroll-left').addEventListener('mouseover', (e) => {
        scrollMoving = setInterval(() => {
            qs('.places-container').scrollLeft -= 10;
        }, 50);
    });
    qs('.scroll-left').addEventListener('mouseout', (e) => {
        clearInterval(scrollMoving);
    });

    qs('.scroll-right').addEventListener('mouseover', (e) => {
        scrollMoving = setInterval(() => {
            qs('.places-container').scrollLeft += 10;
        }, 50);
    });
    qs('.scroll-right').addEventListener('mouseout', (e) => {
        clearInterval(scrollMoving);
    });
};

const linkToRentalDetail = (e) => {
    if (e.target.closest('.place-wrapper') === null) return;
    const cardID = e.target.closest('.place-wrapper').getAttribute('data-set');
    navigateTo('/rental/' + cardID);
};

export { setRentalEvent };
