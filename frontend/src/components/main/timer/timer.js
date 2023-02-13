const timerForm = () => {
    const timer = `
    <div class="circle">
        <svg width="225" viewBox="9 7 230 235" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(110,110)">
                <circle r="100" class="e-c-base"/>
                <g transform="rotate(-90)">
                    <circle r="100" class="e-c-progress"/>
                    <g id="e-pointer">
                        <circle cx="94" cy="0" r="8" class="e-c-pointer"/>
                    </g>
                </g>
            </g>
        </svg>
    </div>
    <div class="controlls">
        <div class="display-remain-time"></div>
        <button class="play" id="pause">출석</button>
    </div>
    `;
    return timer;
};

export { timerForm };
