import homePage from './pages/homePage.js';
import mainPage from './pages/mainPage.js';
import rentalPage from './pages/rentalPage.js';
import rentalDetailPage from './pages/rentalDetailPage.js';
import attendPage from './pages/attendPage.js';
import noticeDetailPage from './pages/noticeDetailPage.js';
import noticePage from './pages/noticePage.js';
import trackPage from './pages/trackPage.js';
import notFoundPage from './pages/notFoundPage.js';
import noticeAddPage from './pages/noticeAddPage.js';

import './styles/style.scss';

import eventdelegator from './main.js';

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const routes = [
    { path: /^\/$/, event: 'home', view: homePage },
    { path: /^\/main$/, event: 'main', view: mainPage },
    { path: /^\/track$/, event: 'track', view: trackPage },
    { path: /^\/rental$/, event: 'rental', view: rentalPage },
    {
        path: /^\/rental\/(\d+)$/,
        event: 'rentalDetail',
        view: rentalDetailPage,
    },
    { path: /^\/attend$/, event: 'attend', view: attendPage },
    { path: /^\/notice$/, event: 'notice', view: noticePage },
    { path: /^\/noticeadd$/, event: 'noticeadd', view: noticeAddPage },
    {
        path: /^\/notice\/(\d+)$/,
        event: 'noticeDetail',
        view: noticeDetailPage,
    },
    { path: /^\/track$/, event: 'track', view: trackPage },
];

const router = async () => {
    const match = routes.find((route) => {
        return route.path.test(location.pathname);
    });
    const view = match ? new match.view() : new notFoundPage(location.pathname);
    document.querySelector('#app').innerHTML = await view.getHtml();
    eventdelegator(match.event);
};

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
