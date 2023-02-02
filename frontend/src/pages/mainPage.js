import AbstractView from './AbstractView.js';

export default class mainPage extends AbstractView {
    constructor() {
        super();
    }
    async getHtml() {
        return `
        <h1>main</h1>
        `;
    }
}
