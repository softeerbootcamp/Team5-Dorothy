import setHomeEvent from './scripts/home.js';
import setMainEvent from './scripts/main.js';
import { setCalendarEvent } from './components/calendar/calendar.js';

const eventdelegator = (root) => {
    switch (root) {
        case '/':
            setHomeEvent();
            break;
        case '/main':
            console.log('main');
            setMainEvent();
            break;
        case '/track':
            console.log('track');
            break;
        case '/attend':
            setCalendarEvent();
            break;
    }
};

export default eventdelegator;
