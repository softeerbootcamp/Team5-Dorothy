import setHomeEvent from './scripts/home.js';
import { setMainEvent, checkAvailable } from './scripts/main.js';

const eventdelegator = (root) => {
    setMainEvent();
    switch (root) {
        case '/':
            setHomeEvent();
            break;
        case '/main':
            setMainEvent();
            break;
        case '/track':
            break;
    }
};

export default eventdelegator;
