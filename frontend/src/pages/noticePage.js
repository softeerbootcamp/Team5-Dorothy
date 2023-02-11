import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';

export default class noticePage extends AbstractView {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${pageTitleTamplate('공지사항')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <div class="notice-container">
                        <article class="notice-wrapper">
                            <div class="notice-title">123</div>
                            <i class="fa-solid fa-comment-dots show-notice"></i> 
                        </article>
                        <article class="notice-wrapper">
                            <div class="notice-title">얼마나긴공지를작성해도공지란안에다담겨질수있는지테스트하기위한임의의공지입니다</div>
                            <i class="fa-solid fa-comment-dots show-notice"></i> 
                        </article>
                        <article class="notice-wrapper">
                            <div class="notice-title">이건가짜공지에요</div>
                            <i class="fa-solid fa-comment-dots show-notice"></i> 
                        </article>
                        <article class="notice-wrapper">
                            <div class="notice-title">이건가짜공지에요</div>
                            <i class="fa-solid fa-comment-dots show-notice"></i> 
                        </article>
                        <article class="notice-wrapper">
                            <div class="notice-title">이건가짜공지에요</div>
                            <i class="fa-solid fa-comment-dots show-notice"></i> 
                        </article>
                        <article class="notice-wrapper">
                            <div class="notice-title">이건가짜공지에요</div>
                            <i class="fa-solid fa-comment-dots show-notice"></i> 
                        </article>
                        <article class="notice-wrapper">
                            <div class="notice-title">이건가짜공지에요</div>
                            <i class="fa-solid fa-comment-dots show-notice"></i> 
                        </article>
                        <article class="notice-wrapper">
                            <div class="notice-title">이건가짜공지에요</div>
                            <i class="fa-solid fa-comment-dots show-notice"></i> 
                        </article>
                        <article class="notice-wrapper">
                            <div class="notice-title">이건가짜공지에요</div>
                            <i class="fa-solid fa-comment-dots show-notice"></i> 
                        </article>
                    </div>
                </section>
            </div>
        </div>
        `;
    }
}
