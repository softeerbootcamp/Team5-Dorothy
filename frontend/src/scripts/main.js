import { makeTimer } from '../components/main/timer/maketimer.js';
import { qs } from '../utils/selector.js';
import { timerForm } from '../components/main/timer/timer.js';

const role = 'manager';
let makeAttendance = false;

function setMainEvent() {
    qs('.main-button-wrapper').addEventListener('click', (e) => {
        const mainButton = e.target.closest('.main-button-front');
        if (mainButton) {
            mainButton
                .closest('.main-button')
                .classList.toggle('input-available');
        }
    });
    if (role === 'manager') {
        qs('.big-content-container').addEventListener('click', (e) => {
            toggleChart(e.target);
        });
    }
    if (role === 'member') {
        if (!makeAttendance) {
            qs('#check-timer').innerHTML = timerForm();

            makeTimer();
        }
    }
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
