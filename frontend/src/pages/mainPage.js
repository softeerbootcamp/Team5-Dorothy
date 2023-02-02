import AbstractView from './AbstractView.js';
export default class mainPage extends AbstractView {
    constructor() {
        super();
        this.setTitle('Posts');
    }
    async getHtml() {
        return `
        <h1>Posts</h1>
`;
    }
}
