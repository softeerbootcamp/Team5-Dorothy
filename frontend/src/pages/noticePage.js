import AbstractView from './AbstractView.js';

export default class noticePage extends AbstractView {
    constructor() {
        super();
    }
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    <h2>안녕하세요, 사용자님! 이곳은 공지페이지입니다</h2>
                </div>
                <div class="content-container">
                </div>
                <div class="mth-calendar-container">
                </div>
            </div>
        </div>
        `;
    }
}
