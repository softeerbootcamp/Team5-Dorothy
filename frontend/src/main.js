import setHomeEvent from './scripts/home.js';
import { setMainEvent } from './scripts/main.js';
import { setTrackEvent } from './components/track/trackCard.js';
import { setCalendarEvent } from './components/calendar/calendar.js';
import { setRentalEvent } from './scripts/rental.js';
import { setNoticeEvent } from './scripts/notice.js';
import {
    clearTimer,
    intervalTimer,
} from './components/main/timer/maketimer.js';

const eventdelegator = (root) => {
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
        case 'notice':
            setNoticeEvent();
            break;
    }
};

export default eventdelegator;
