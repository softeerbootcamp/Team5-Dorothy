import AbstractView from './AbstractView.js';

export default class homePage extends AbstractView {
    constructor() {
        super();
    }
    async getHtml() {
        return `
        <p>home</p>
        `;
    }
}
