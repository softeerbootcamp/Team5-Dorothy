import setHomeEvent from './scripts/home.js';
import { setMainEvent, checkAvailable } from './scripts/main.js';
import makeTimer from './components/main/maketimer.js';

const eventdelegator = (root) => {
    setMainEvent();
    switch (root) {
        case '/':
            setHomeEvent();
            break;
        case '/main':
            console.log(checkAvailable);
            if (true) makeTimer();
            break;
        case '/track':
            break;
    }
};

export default eventdelegator;
