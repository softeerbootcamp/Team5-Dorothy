import { makeTimer } from '../components/main/timer/maketimer.js';
import { qs } from '../utils/selector.js';
import { timerForm } from '../components/main/timer/timer.js';
import { userRole } from '../store/user.js';
import { GetTrackCode, PostTrackMembers } from '../apis/track.js';
import { PostsTrack } from '../apis/track.js';
import { getDayAttendance } from '../apis/attend.js';
import { navigateTo } from '../router.js';

async function setMainEvent() {
    if (userRole() === 'ADMIN') {
        qs('.big-content-container').addEventListener('click', (e) => {
            toggleChart(e.target);
        });
        qs('#track-code-call').addEventListener('click', async () => {
            const inviteCode = await GetTrackCode(
                qs('.track-select-container').value,
            );
            qs('#track-invite-code').innerHTML = inviteCode.data;
            qs('#track-invite-id').innerHTML = qs(
                '.track-select-container',
            ).value;
        });
        qs('#track-name-input').addEventListener('input', (e) => {
            qs('#main-button-generate').disabled =
                e.target.value.trim().length <= 0;
        });
        qs('#main-button-generate').addEventListener('click', async () => {
            const newTrackName = qs('#track-name-input');
            PostsTrack(newTrackName.value);
            newTrackName.value = '';
        });
    }
    if (userRole() === 'MEMBER') {
        const currentAttendance = await getDayAttendance(3);
        console.log(currentAttendance);

        const attendanceType = currentAttendance.type;
        console.log(attendanceType);
        if (attendanceType !== 'PRESENT' && attendanceType !== 'TARDY') {
            qs('.image-container').insertAdjacentHTML(
                'afterbegin',
                timerForm(),
            );
            makeTimer();
        }
        qs('.news-content-wrapper').addEventListener('click', (e) => {
            const parent = e.target.closest('table');
            const targetNode = parent.querySelector('.notice-wrapper');
            const targetID = targetNode.getAttribute('data-set');
            navigateTo(`/notice/${targetID}`);
        });
        qs('#main-button-confirm').addEventListener('click', (e) => {
            const trackId = qs('#track-id');
            const trackCode = qs('#track-code');
            PostTrackMembers(trackId.value, trackCode.value);
            trackId.value = '';
            trackCode.value = '';
            e.target
                .closest('.main-button')
                .classList.toggle('input-available');
        });
    }
    qs('.main-button-wrapper').addEventListener('click', (e) => {
        const mainButton = e.target.closest('.main-button-front');
        if (mainButton) {
            mainButton
                .closest('.main-button')
                .classList.toggle('input-available');
        }
        const closeButton = e.target.closest('#main-button-cancel');
        if (closeButton) {
            closeButton
                .closest('.main-button')
                .classList.toggle('input-available');
        }
    });
    qs('#track-code-call').addEventListener('click', async () => {
        const inviteCode = await GetTrackCode(
            qs('.track-select-container').value,
        );
        qs('#track-invite-code').innerHTML = inviteCode.data;
    });
    qs('#track-name-input').addEventListener('input', (e) => {
        qs('#main-button-generate').disabled =
            e.target.value.trim().length <= 0;
    });
    qs('#main-button-generate').addEventListener('click', async () => {
        const newTrackName = qs('#track-name-input');
        PostsTrack(newTrackName.value);
        newTrackName.value = '';
    });
}

const toggleChart = (target) => {
    if (
        !target.classList.contains('daily-chart-btn') &&
        !target.classList.contains('weekly-chart-btn')
    )
        return;
    if (target.classList.contains('daily-chart-btn')) {
        qs('.daily-ratio-wrapper').classList.remove('hidden');
        qs('.weekly-ratio-wrapper').classList.add('hidden');
    }
    if (target.classList.contains('weekly-chart-btn')) {
        qs('.daily-ratio-wrapper').classList.add('hidden');
        qs('.weekly-ratio-wrapper').classList.remove('hidden');
    }
};

// const getUserLocation = (state) => {
//     if (navigator.geolocation) {
//         let id;
//         if (state) {
//             id = navigator.geolocation.watchPosition(function (pos) {
//                 let latitude = pos.coords.latitude;
//                 let longitude = pos.coords.longitude;
//                 console.log(latitude, longitude);
//             });
//         } else {
//             navigator.geolocation.clearWatch(id);
//         }
//     } else {
//         alert('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
//     }
// };

export { setMainEvent };
