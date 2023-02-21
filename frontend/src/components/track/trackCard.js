import { qs, qsa } from '../../utils/selector';
import { userRole, userTrackID } from '../../store/user';
import { PostTrack, PostTrackMember } from '../../apis/track';
import { navigateTo } from '../../router';

const trackCard = (idx, img, tname) => {
    return `
    <figure class="track-wrapper" data-set='${idx}'>
        <img class="track-image" src='/src/assets/${img}.svg'></img>
        <figcaption class="track-name">${tname}</figcaption>
    </figure>`;
};

function setTrackEvent() {
    if (userRole() === 'ADMIN') {
        const trackMake = qs('#track-make');
        const trackMakeInput = trackMake.querySelector('.track-input');
        const trackMakeBtn = trackMake.querySelector('.track-button');
        trackMakeInput.addEventListener('input', (e) => {
            trackMakeBtn.disabled = e.target.value.trim().length <= 0;
        });
        trackMake.addEventListener('click', (e) => {
            const makeBtn = e.target.closest('.track-button');
            if (makeBtn) {
                // trackMake.insertAdjacentHTML(
                //     'beforebegin',
                //     trackCard('soundless', trackMakeInput.value),
                // );
                // console.log(trackMakeInput.value);
                PostTrack(trackMakeInput.value);
                trackMake.classList.toggle('track-rotate');
                trackMakeInput.value = '';
                trackMakeBtn.disabled = 'true';
            } else {
                if (trackMake.classList.contains('track-rotate')) return;
                trackMake.classList.toggle('track-rotate');
                trackMakeInput.focus();
            }
        });
    }
    if (userRole() === 'MEMBER') {
        const trackJoin = qs('#track-join');
        const trackJoinInput = trackJoin.querySelector('.track-input');
        const trackJoinID = trackJoin.querySelector('.track-index-input');
        const trackJoinBtn = trackJoin.querySelector('.track-button');
        trackJoinInput.addEventListener('input', (e) => {
            trackJoinBtn.disabled = e.target.value.length <= 0;
        });
        trackJoin.addEventListener('click', (e) => {
            const makeBtn = e.target.closest('.track-button');
            if (makeBtn) {
                PostTrackMember(trackJoinID.value, trackJoinInput.value);
                trackJoin.classList.toggle('track-rotate');
                trackJoinInput.value = '';
                trackJoinID.value = '';
                trackJoinBtn.disabled = 'true';
            } else {
                if (trackJoin.classList.contains('track-rotate')) return;
                trackJoin.classList.toggle('track-rotate');
                trackJoinInput.focus();
            }
        });
    }

    qs('.track-container').addEventListener('click', (e) => {
        const target = e.target.closest('.track-wrapper');
        if (target == null) return;
        const targetDataSet = target.getAttribute('data-set');
        console.log(targetDataSet);
        userTrackID.trackID = targetDataSet;
        navigateTo('/main');
    });
}

export { trackCard, setTrackEvent };
