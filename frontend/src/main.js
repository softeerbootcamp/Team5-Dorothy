import homeScript from './scripts/home.js';

const eventdelegator = (root) => {
    switch (root) {
        case '/':
            homeScript();
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
