import AbstractView from './pageTemplate';
import { pageTitleTamplate } from '../components/pageTitle';
import { managerMain } from '../components/main/managerMain';
import { userMain } from '../components/main/userMain';
import { userRole, userName } from '../store/user';

export default class mainPage extends AbstractView {
    async getHtml() {
        /*html*/
        return `
        <div class="container">
            <h1 class="title-wrapper Mini">DOROTHY</h1>
            <div class="name-wrapper">
                ${pageTitleTamplate(`안녕하세요, ${userName()}님!`)}
            </div>
            <div class="content-container">
            </div>
            <section class="big-content-container">
                ${userRole() === 'ADMIN' ? managerMain() : userMain()}
            </section>
        </div>
        `;
    }
}
