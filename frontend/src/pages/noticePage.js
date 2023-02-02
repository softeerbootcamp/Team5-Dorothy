import AbstractView from './AbstractView.js';

export default class noticePage extends AbstractView {
    constructor() {
        super();
    }
    async getHtml() {
        return `
        <p>notice</p>
        `;
    }
}
