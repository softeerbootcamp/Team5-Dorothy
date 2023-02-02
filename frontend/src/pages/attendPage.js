import AbstractView from './AbstractView.js';

export default class attendPage extends AbstractView {
    constructor() {
        super();
    }
    async getHtml() {
        return `
        <p>attend</p>
        `;
    }
}
