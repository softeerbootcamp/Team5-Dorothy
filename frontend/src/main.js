import setHomeEvent from './scripts/home.js';
import { setMainEvent } from './scripts/main.js';
import { setTrackEvent } from './components/track/trackCard.js';
import { setCalendarEvent } from './components/calendar/calendar.js';
import { setRentalEvent, setRentalDetailEvent } from './scripts/rental.js';
import { setNoticeEvent, setNoticeAddEvent } from './scripts/notice.js';
import {
    clearTimer,
    intervalTimer,
} from './components/main/timer/maketimer.js';
import { holdClickReserve } from './scripts/rentalDetail.js';

const eventdelegator = (root) => {
    document.removeEventListener('click', setRentalEvent);
    clearTimer(intervalTimer);
    switch (root) {
        case 'home':
            setHomeEvent();
            break;
        case 'main':
            setMainEvent();
            break;
        case 'track':
            setTrackEvent();
            break;
        case 'attend':
            setCalendarEvent();
            break;
        case 'rental':
            setRentalEvent();
            break;
        case 'rentalDetail':
            setRentalDetailEvent();
            break;
        case 'notice':
            setNoticeEvent();
            break;
        case 'rentalDetail':
            holdClickReserve();
            break;
        case 'noticeadd':
            setNoticeAddEvent();
    }
};

export default eventdelegator;
