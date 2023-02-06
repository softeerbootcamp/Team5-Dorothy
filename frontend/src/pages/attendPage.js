import AbstractView from './AbstractView.js';

export default class attendPage extends AbstractView {
    constructor() {
        super();
    }
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    <h2>출석 체크</h2>
                </div>
                <div class="content-container">
                </div>
                <div class="mth-calendar-container">
                    <canvas class="attend-chart">
                    </canvas>
                </div>
            </div>
        </div>
        `;
    }
}
