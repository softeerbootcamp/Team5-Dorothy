import setHomeEvent from './scripts/home.js';
const eventdelegator = (root) => {
    switch (root) {
        case '/':
            setHomeEvent();
            break;
        case '/main':
            console.log('main');
            break;
        case '/track':
            console.log('track');
            break;
    }
};

export default eventdelegator;
