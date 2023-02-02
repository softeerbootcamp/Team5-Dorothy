import AbstractView from './AbstractView.js';

export default class rentalDetailPage extends AbstractView {
    // params 값 전달받기
    constructor(params) {
        super(params);
    }
    async getHtml() {
        return `
        <p>rentailDetail</p>
        `;
    }
}
