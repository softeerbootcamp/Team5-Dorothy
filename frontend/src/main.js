import setHomeEvent from './scripts/home.js';
import setMainEvent from './scripts/main.js';
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
    }
};

export default eventdelegator;
