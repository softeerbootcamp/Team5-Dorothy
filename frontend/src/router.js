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

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const routes = [
    { path: /^\/$/, view: homePage },
    { path: /^\/main$/, view: mainPage },
    { path: /^\/track$/, view: trackPage },
    { path: /^\/rental$/, view: rentalPage },
    { path: /^\/rental\/(\d+)$/, view: rentalDetailPage },
    { path: /^\/attend$/, view: attendPage },
    { path: /^\/notice$/, view: noticePage },
    { path: /^\/track$/, view: trackPage },
];

const router = async () => {
    const match = routes.find((route) => {
        return route.path.test(location.pathname);
    });
    const view = match ? new match.view() : new notFoundPage(location.pathname);
    document.querySelector('#app').innerHTML = await view.getHtml();
    eventdelegator(match.path);
};

// document.addEventListener('DOMContentLoaded', () => {
//     router(getParams(match));
// });

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
