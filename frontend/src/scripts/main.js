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
            makeTimer('결석');
            //getUserLocation(true);
        }
        document.addEventListener('click', (e) => {
            checkAttendance(e);
        });
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

const checkAttendance = (e) => {
    if (!e.target.classList.contains('play')) return;
    $('#check-timer').remove();
    makeAttendance = true;
    makeTimer('출석');
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
