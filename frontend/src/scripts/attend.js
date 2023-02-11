const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const ATTEND_MINUTES = 10;
const ATTEND_SECONDS = 60;

const NOW = new Date();
const SET_MINUTES = ATTEND_MINUTES - NOW.getMinutes();
const SET_SECONDS = ATTEND_SECONDS - NOW.getSeconds();

const COLOR_CODES = {
    info: {
        color: 'green',
    },
    warning: {
        color: 'orange',
        threshold: WARNING_THRESHOLD,
    },
    alert: {
        color: 'red',
        threshold: ALERT_THRESHOLD,
    },
};

function makeTimer() {
    let progressBar = document.querySelector('.e-c-progress');
    let pointer = document.getElementById('e-pointer');
    let length = Math.PI * 2 * 100;

    progressBar.style.strokeDasharray = length;

    function update(value) {
        var offset = -length - length * value;
        progressBar.style.strokeDashoffset = offset;
        pointer.style.transform = `rotate(${360 * value}deg)`;
    }

    const displayOutput = document.querySelector('.display-remain-time');

    let intervalTimer;
    let timeLeft;
    let wholeTime = 60 * SET_MINUTES + SET_SECONDS;
    let isPaused = false;
    let isStarted = false;

    update(wholeTime);
    displayTimeLeft(wholeTime);

    function timer(seconds) {
        let remainTime = Date.now() + seconds * 1000;

        displayTimeLeft(seconds);
        intervalTimer = setInterval(function () {
            timeLeft = Math.round((remainTime - Date.now()) / 1000);
            displayTimeLeft(timeLeft);
        }, 1000);
    }

    function pauseTimer(event) {
        if (isStarted === false) {
            timer(wholeTime);
            isStarted = true;
        } else if (isPaused) {
            timer(timeLeft);
            isPaused = isPaused ? false : true;
        } else {
            clearInterval(intervalTimer);
            isPaused = isPaused ? false : true;
        }
    }

    function displayTimeLeft(timeLeft) {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        let displayString = `${
            minutes < 0 ? (minutes > -10 ? '-0' : '-') : minutes < 10 ? '0' : ''
        }${Math.abs(minutes)}:${
            seconds < 10 && seconds > -10 ? '0' : ''
        }${Math.abs(seconds)}`;
        displayOutput.textContent = displayString;
        update(timeLeft, wholeTime);
    }
    pauseTimer();
}

export default makeTimer;
