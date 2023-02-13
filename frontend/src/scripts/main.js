import makeTimer from '../components/main/timer/maketimer.js';
import { $ } from '../utils/selector.js';
import { timerForm } from '../components/main/timer/timer.js';

const role = 'member';
let makeAttendance = false;

function setMainEvent() {
    if (role === 'manager') {
        document.addEventListener('click', (e) => {
            toggleChart(e.target);
        });
    }
    if (role === 'member') {
        if (!makeAttendance) {
            $('#check-timer').innerHTML = timerForm();
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
        $('.attend-ratio-wrapper').classList.remove('hidden');
        $('.vertical_chart_box').classList.add('hidden');
    }
    if (target.classList.contains('weekly-chart-btn')) {
        $('.attend-ratio-wrapper').classList.add('hidden');
        $('.vertical_chart_box').classList.remove('hidden');
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
