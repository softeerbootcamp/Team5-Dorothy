import homePage from './pages/homePage.js';
import mainPage from './pages/mainPage.js';
import rentalPage from './pages/rentalPage.js';
import rentalDetailPage from './pages/rentalDetailPage.js';
import attendPage from './pages/attendPage.js';
import noticePage from './pages/noticePage.js';
import trackPage from './pages/trackPage.js';
import eventdelegator from './main.js';

const pathToRegex = (path) =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
        (result) => result[1],
    );

    return Object.fromEntries(
        keys.map((key, i) => {
            return [key, values[i]];
        }),
    );
};

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/', view: homePage },
        { path: '/main', view: mainPage },
        { path: '/track', view: trackPage },
        { path: '/rental', view: rentalPage },
        { path: '/rental/:id', view: rentalDetailPage },
        { path: '/attend', view: attendPage },
        { path: '/notice', view: noticePage },
        { path: '/track', view: trackPage },
    ];
    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path)),
        };
    });

    let match = potentialMatches.find(
        (potentialMatch) => potentialMatch.result !== null,
    );

    const view = new match.route.view(getParams(match));
    document.querySelector('#app').innerHTML = await view.getHtml();
    eventdelegator(match.route.path);
};

document.addEventListener('DOMContentLoaded', () => {
    router(getParams(match));
});

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

export { navigateTo };
