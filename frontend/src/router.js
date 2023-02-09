import homePage from './pages/homePage.js';
import mainPage from './pages/mainPage.js';
import rentalPage from './pages/rentalPage.js';
import rentalDetailPage from './pages/rentalDetailPage.js';
import attendPage from './pages/attendPage.js';
import noticePage from './pages/noticePage.js';
import trackPage from './pages/trackPage.js';
import notFoundPage from './pages/notFoundPage.js';

import './styles/style.scss';

import eventdelegator from './main.js';

const pathToRegex = (path) =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = (matchPath) => {
    const keys = Array.from(matchPath.matchAll(/:(\w+)/g)).map(
        (result) => result[1],
    );
    console.log(keys);

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

const routes = [
    { path: '/', view: homePage },
    { path: '/main', view: mainPage },
    { path: '/track', view: trackPage },
    { path: '/rental', view: rentalPage },
    { path: '/rental/:id', view: rentalDetailPage },
    { path: '/attend', view: attendPage },
    { path: '/notice', view: noticePage },
    { path: '/track', view: trackPage },
    { path: '/tempt', view: rentalDetailPage },
];

const router = async () => {
    // const potentialMatches = routes.map((route) => {
    //     return {
    //         route: route,
    //         result: location.pathname.match(pathToRegex(route.path)),
    //     };
    // });
    // console.log(potentialMatches);
    // let match = potentialMatches.find(
    //     (potentialMatch) => potentialMatch.result !== null,
    // );

    const match = routes.find((route) => {
        return route.path === location.pathname;
    });
    // const view = new match.view(getParams(match.path));
    const view = match ? new match.view() : new notFoundPage(location.pathname);
    document.querySelector('#app').innerHTML = await view.getHtml();
    eventdelegator(match.path);
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
