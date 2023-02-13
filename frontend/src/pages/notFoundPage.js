import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';

export default class noticePage extends AbstractView {
    async getHtml() {
        return /*html */ `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${pageTitleTamplate('404-Not Found')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <div class="cube">
                        <div class="face front">1</div>
                        <div class="face back">2</div>
                        <div class="face right">3</div>
                        <div class="face left">4</div>
                        <div class="face top">5</div>
                        <div class="face bottom">6</div>
                    </div>
                    <div class="dice-message-container">
                        <p>에러 페이지입니다. 버튼을 눌러보세요.</p>
                        <button class="dice-button">PUSH ME</button>
                    </div>
                </section>
            </div>
        </div>
        `;
    }
}
