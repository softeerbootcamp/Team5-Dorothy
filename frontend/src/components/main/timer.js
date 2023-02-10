const timerForm = () => {
    const timer = `
        <div class="timer-container">
            <div class="circle">
                <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(110,110)">
                        <circle r="100" class="e-c-base"/>
                        <g transform="rotate(-90)">
                            <circle r="100" class="e-c-progress"/>
                            <g id="e-pointer">
                                <circle cx="100" cy="0" r="8" class="e-c-pointer"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="controlls">
                <div class="display-remain-time">00:60</div>
                <button class="play" id="pause"></button>
            </div>
        </div>
    `;
    return timer;
};

export { timerForm };
