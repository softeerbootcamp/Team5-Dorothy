import setHomeEvent from './scripts/home.js';
import { setMainEvent } from './scripts/main.js';
import { setTrackEvent } from './components/track/trackCard.js';
import { setCalendarEvent } from './components/calendar/calendar.js';

const eventdelegator = (root) => {
    setMainEvent();
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
    }
};

export default eventdelegator;
