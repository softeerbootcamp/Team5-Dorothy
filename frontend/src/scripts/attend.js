const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

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

    function update(value, timePercent) {
        var offset = -length - (length * value) / timePercent;
        progressBar.style.strokeDashoffset = offset;
        pointer.style.transform = `rotate(${(360 * value) / timePercent}deg)`;
    }

    //circle ends
    const displayOutput = document.querySelector('.display-remain-time');
    const pauseBtn = document.getElementById('pause');

    let intervalTimer;
    let timeLeft;
    let wholeTime = 0.5 * 60; // manage this to set the whole time
    let isPaused = false;
    let isStarted = false;

    update(wholeTime, wholeTime); //refreshes progress bar
    displayTimeLeft(wholeTime);

    function timer(seconds) {
        //counts time, takes seconds
        let remainTime = Date.now() + seconds * 1000;
        displayTimeLeft(seconds);

        intervalTimer = setInterval(function () {
            timeLeft = Math.round((remainTime - Date.now()) / 1000);
            if (timeLeft < 0) {
                clearInterval(intervalTimer);
                isStarted = false;
                setterBtns.forEach(function (btn) {
                    btn.disabled = false;
                    btn.style.opacity = 1;
                });
                displayTimeLeft(wholeTime);
                pauseBtn.classList.remove('pause');
                pauseBtn.classList.add('play');
                return;
            }
            displayTimeLeft(timeLeft);
        }, 1000);
    }

    function pauseTimer(event) {
        timer(wholeTime);
        isStarted = true;
        this.classList.remove('play');
        this.classList.add('pause');
    }

    function displayTimeLeft(timeLeft) {
        //displays time on the input
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${
            seconds < 10 ? '0' : ''
        }${seconds}`;
        displayOutput.textContent = displayString;
        update(timeLeft, wholeTime);
    }

    pauseBtn.addEventListener('click', pauseTimer);
    // const FULL_DASH_ARRAY = 283;
    // const WARNING_THRESHOLD = 10;
    // const ALERT_THRESHOLD = 5;

    // const TIME_LIMIT = 10;
    // let timePassed = 0;
    // let timeLeft = TIME_LIMIT;
    // let timerInterval = null;
    // let remainingPathColor = COLOR_CODES.info.color;

    // const timerContainer = document.querySelector('#check-timer');
    // timerContainer.innerHTML = `
    // <div class="base-timer">
    //     <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //         <g class="base-timer__circle">
    //             <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
    //             <path
    //                 id="base-timer-path-remaining"
    //                 stroke-dasharray="283"
    //                 class="base-timer__path-remaining ${remainingPathColor}"
    //                 d="
    //                 M 50, 50
    //                 m -45, 0
    //                 a 45,45 0 1,0 90,0
    //                 a 45,45 0 1,0 -90,0
    //                 "
    //             ></path>
    //         </g>
    //     </svg>
    //     <span id="base-timer-label" class="base-timer__label">${formatTime(
    //         timeLeft,
    //     )}</span>
    // </div>
    // `;

    // startTimer();

    // function onTimesUp() {
    //     clearInterval(timerInterval);
    // }

    // function startTimer() {
    //     timerInterval = setInterval(() => {
    //         timePassed = timePassed += 1;
    //         timeLeft = TIME_LIMIT - timePassed;
    //         document.getElementById('base-timer-label').innerHTML =
    //             formatTime(timeLeft);
    //         setCircleDasharray();
    //         setRemainingPathColor(timeLeft);

    //         if (timeLeft === 0) {
    //             onTimesUp();
    //         }
    //     }, 1000);
    // }

    // function formatTime(time) {
    //     const minutes = Math.floor(time / 60);
    //     let seconds = time % 60;

    //     if (seconds < 10) {
    //         seconds = `0${seconds}`;
    //     }

    //     return `${minutes}:${seconds}`;
    // }

    // function setRemainingPathColor(timeLeft) {
    //     const { alert, warning, info } = COLOR_CODES;
    //     if (timeLeft <= alert.threshold) {
    //         document
    //             .getElementById('base-timer-path-remaining')
    //             .classList.remove(warning.color);
    //         document
    //             .getElementById('base-timer-path-remaining')
    //             .classList.add(alert.color);
    //     } else if (timeLeft <= warning.threshold) {
    //         document
    //             .getElementById('base-timer-path-remaining')
    //             .classList.remove(info.color);
    //         document
    //             .getElementById('base-timer-path-remaining')
    //             .classList.add(warning.color);
    //     }
    // }

    // function setCircleDasharray() {
    //     const circleDasharray = `${(
    //         calculateTimeFraction() * FULL_DASH_ARRAY
    //     ).toFixed(0)} 283`;
    //     document
    //         .getElementById('base-timer-path-remaining')
    //         .setAttribute('stroke-dasharray', circleDasharray);
    // }

    // timerContainer
    //     .querySelector('.base-timer')
    //     .addEventListener('click', () => {
    //         alert('출석 완료!');
    //     });
}

export default makeTimer;
