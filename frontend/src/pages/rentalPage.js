import AbstractView from './AbstractView.js';

export default class rentalPage extends AbstractView {
    constructor() {
        super();
    }
    async getHtml() {
        return `
        <h1>rental</h1>
        `;
    }
}
