import AbstractView from './pageTemplate';
import { pageTitleTamplate } from '../components/pageTitle';
import { managerMain } from '../components/main/managerMain';
import { userMain } from '../components/main/userMain';

const role = 'manager';

export default class mainPage extends AbstractView {
    async getHtml() {
        /*html*/
        return `
        <div class="container">
            <h1 class="title-wrapper Mini">DOROTHY</h1>
            <div class="name-wrapper">
            ${pageTitleTamplate(`안녕하세요, ${role}님!`)}
            </div>
            <section class="main-content-container flex">
            ${role === 'manager' ? managerMain() : userMain()}
            </section>
        </div> 
        
        `;
    }
}
