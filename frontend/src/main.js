import setHomeEvent from './scripts/home.js';
import { setMainEvent } from './scripts/main.js';
import { setTrackEvent } from './components/track/trackCard.js';
import { setCalendarEvent } from './components/calendar/calendar.js';
import { setRentalEvent } from './scripts/rental.js';
import {
    setNoticeEvent,
    setNoticeAddEvent,
    setNoticeDetailEvent,
} from './scripts/notice.js';
import {
    clearTimer,
    intervalTimer,
} from './components/main/timer/maketimer.js';
import { holdClickReserve, ReservedTime } from './scripts/rentalDetail.js';
import { userRole } from './store/user.js';

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
            if (userRole() === 'MEMBER') {
                setCalendarEvent();
            }
            break;
        case 'rental':
            setRentalEvent();
            break;
        case 'notice':
            setNoticeEvent();
            break;
        case 'noticeDetail':
            setNoticeDetailEvent();
            break;
        case 'rentalDetail':
            ReservedTime(location.pathname.split('/')[2]);
            holdClickReserve();

            break;
        case 'noticeadd':
            setNoticeAddEvent();
    }
};

export default eventdelegator;
