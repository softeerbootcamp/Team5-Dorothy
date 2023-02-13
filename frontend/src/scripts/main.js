import makeTimer from '../components/main/timer/maketimer.js';
import { $ } from '../utils/selector.js';
import { timerForm } from '../components/main/timer/timer.js';

function setMainEvent() {
    // let makeAttendance = false;
    // if (!makeAttendance) {
    //     getUserLocation();
    //     $('#check-timer').innerHTML = timerForm();
    //     makeTimer();
    // }
    // $('.play').addEventListener('click', () => {
    //     makeAttendance = true;
    //     $('#check-timer').remove();
    //     //navigator.geolocation.clearWatch();
    // });
}

let checkAvailable;
const setALatitude = 37.490744;
const setALongitude = 127.03337;
const setBLatitude = 37.490955;
const setBLongitude = 127.03354;

const getUserLocation = () => {
    if (navigator.geolocation) {
        //위치 정보를 정기적으로 얻기
        const id = navigator.geolocation.watchPosition(function (pos) {
            let latitude = pos.coords.latitude;
            let longitude = pos.coords.longitude;
            console.log(latitude, longitude);
            console.log(
                latitude >= setALatitude &&
                    latitude <= setBLatitude &&
                    longitude >= setALongitude &&
                    longitude <= setBLongitude,
            );
            checkAvailable =
                latitude >= setALatitude &&
                latitude <= setBLatitude &&
                longitude >= setALongitude &&
                longitude <= setBLongitude;
        });
        //버튼 클릭으로 감시를 중지
        // $('#check-timer').click(function () {
        //     navigator.geolocation.clearWatch(id);
        // });
    } else {
        alert('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
    }
};

export { setMainEvent, checkAvailable };
