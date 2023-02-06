import AbstractView from './pageTemplate';
import { pageTitleTamplate } from '../components/pageTitle.js';
export default class rentalDetailPage extends AbstractView {
    // params 값 전달받기
    constructor(params) {
        super(params);
    }
    async getHtml() {
        return `
        ${pageTitleTamplate('공간대여 하실 건가요?')}
        <div class="places-container">
            <p class='place-name'>공간대여</p>
            <p class="meridiem">오전</p>
            
            <p class="meridiem">오후</p>

        </p>


        `;
    }
}
