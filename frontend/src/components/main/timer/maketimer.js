import { $ } from '../../../utils/selector';

const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 0;

const ATTEND_MINUTES = 59;
const ATTEND_SECONDS = 60;

const NOW = new Date();
let id;
const SET_MINUTES = ATTEND_MINUTES - NOW.getMinutes();
const SET_SECONDS = ATTEND_SECONDS - NOW.getSeconds();

const getUserLocation = () => {
    if (navigator.geolocation) {
        id = navigator.geolocation.watchPosition(function (pos) {
            let latitude = pos.coords.latitude;
            let longitude = pos.coords.longitude;
            console.log(latitude, longitude);
        });
    } else {
        alert('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
    }
};

const makeTimer = () => {
    //위치 정보 받아오기
    getUserLocation();

    let length = Math.PI * 2 * 100;
    $('.e-c-progress').style.strokeDasharray = length;

    function update(value) {
        let offset = -length - length * (value - 1);
        $('.e-c-progress').style.strokeDashoffset = offset / 36;
        $('#e-pointer').style.transform = `rotate(${(360 * value) / 36}deg)`;
    }
    function displayTimeLeft(timeLeft) {
        if (wholeTime === 0) return;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        let displayString = `${
            minutes < 0 ? (minutes > -10 ? '-0' : '-') : minutes < 10 ? '0' : ''
        }${Math.abs(minutes)}:${
            seconds < 10 && seconds > -10 ? '0' : ''
        }${Math.abs(seconds)}`;

        if (minutes < ALERT_THRESHOLD) {
            $('.e-c-progress').classList.add('red');
            $('#e-pointer').classList.add('red');
            $('.controlls').classList.add('red');
        } else if (minutes < WARNING_THRESHOLD && minutes > ALERT_THRESHOLD) {
            $('.e-c-progress').classList.add('orange');
            $('#e-pointer').classList.add('orange');
            $('.controlls').classList.add('orange');
        } else {
            $('.e-c-progress').classList.add('pink');
            $('#e-pointer').classList.add('pink');
            $('.controlls').classList.add('pink');
        }
        displayOutput.textContent = displayString;
        update(timeLeft);
    }

    const displayOutput = document.querySelector('.display-remain-time');
    const playButton = document.querySelector('.play');
    let intervalTimer;
    let timeLeft;
    let wholeTime = 60 * SET_MINUTES + SET_SECONDS;

    function timer(seconds) {
        let remainTime = Date.now() + seconds * 1000;
        displayTimeLeft(seconds);
        intervalTimer = setInterval(function () {
            timeLeft = Math.round((remainTime - Date.now()) / 1000);
            displayTimeLeft(timeLeft);
        }, 1000);
    }
    timer(wholeTime);

    playButton.addEventListener('click', () => {
        navigator.geolocation.clearWatch(id);
        clearInterval(intervalTimer);
        document.querySelector('#check-timer').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('#check-timer').remove();
        }, 1000);
    });
};

export default makeTimer;
