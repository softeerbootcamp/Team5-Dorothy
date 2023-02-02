import homePage from './pages/homePage.js';
import mainPage from './pages/mainPage.js';
import rentalPage from './pages/rentalPage.js';
import noticePage from './pages/noticePage.js';
import attendPage from './pages/attendPage.js';

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/', view: homePage },
        { path: '/main', view: mainPage },
        { path: '/rental', view: rentalPage },
        { path: '/attend', view: attendPage },
        { path: '/notice', view: noticePage },
    ];
    // 현재 route와 현재 페이지 경로가 일치하는지 테스트
    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        };
    });

    // find 메서드를 사용해 isMatch가 true인 객체를 찾는다.
    let match = potentialMatches.find(
        (potentialMatch) => potentialMatch.isMatch,
    );
    const view = new match.route.view();
    console.log(view);
    document.querySelector('#app').innerHTML = await view.getHtml();
};

// DOM이 렌더링 되면 router 함수 실행
document.addEventListener('DOMContentLoaded', () => {
    router();
});

// 뒤로가기 하거나 새로고침 했을 때 router도 그 페이지에 맞게 동작하도록
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    // 클릭 이벤트가 발생했을 때,
    // 해당 target이 'data-link' attribute가 있다면
    // 페이지 이동 함수 실행
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});
