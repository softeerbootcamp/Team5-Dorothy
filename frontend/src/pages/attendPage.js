import AbstractView from './AbstractView.js';
import { pageTitleTamplate } from '../components/pageTitle.js';

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
                    ${pageTitleTamplate('월간 출석체크')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    
                </section>
            </div>
        </div>
        `;
    }
}
