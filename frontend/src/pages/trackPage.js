import AbstractView from './pageTemplate.js';
import { pageTitleTamplate } from '../components/pageTitle.js';
import { trackCard } from '../components/track/trackCard.js';
import { trackManager, trackUser } from '../components/track/addTrack.js';
import { GetTrack } from '../apis/track.js';

import { userRole } from '../store/user.js';

export default class trackPage extends AbstractView {
    async getHtml() {
        const trackInfo = await GetTrack();
        return /*html */ `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${pageTitleTamplate('트랙을 선택하세요')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <section class="track-container">
                    ${trackInfo
                        .map((track) => {
                            return trackCard(
                                Math.floor(Math.random() * 20) + 1,
                                track.name,
                            );
                        })
                        .join('')}
                        ${userRole() === 'ADMIN' ? trackManager() : trackUser()}
                    </section>
                </section>
            </div>
        </div>
        `;
    }
}
