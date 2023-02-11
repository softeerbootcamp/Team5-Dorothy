const makeChart = () => {
    const chart =
        /*html*/
        `
        <div class="vertical_chart_box">
            <div class="chart_box">
                <ul class="axis_y">
                    <li class="item">
                        0<span class="blind">시간</span>
                    </li>
                    <li class="item">
                        3<span class="blind">시간</span>
                    </li>
                    <li class="item">
                        6<span class="blind">시간</span>
                    </li>
                    <li class="item">
                        9<span class="blind">시간</span>
                    </li>
                    <li class="item">
                        12<span class="blind">시간</span>
                    </li>
                </ul>
                <ul class="axis_x">
                    <li class="item">
                        <div class="text_box">
                            <strong class="day">17(월)</strong>
                            <span class="time">00시간</span>
                        </div>
                        <button type="button" class="graph">
                            <span class="time data1" style="height:80%;">
                                <span class="blind">data 타입 1</span>
                            </span>
                        </button>
                    </li>
                    <li class="item">
                        <div class="text_box">
                            <strong class="day">18(화)</strong>
                            <span class="time">00시간</span>
                        </div>
                        <button type="button" class="graph">
                            <span class="time data1" style="height:50%;">
                                <span class="blind">data 타입 1</span>
                            </span>
                            <span class="time data2" style="height:20%;">
                                <span class="blind">data 타입 2</span>
                            </span>
                            <span class="time data3" style="height:10%;">
                                <span class="blind">data 타입 3</span>
                            </span>
                        </button>
                    </li>
                    <li class="item">
                        <div class="text_box">
                            <strong class="day">19(수)</strong>
                            <span class="time">00시간</span>
                        </div>
                        <button type="button" class="graph">
                            <span class="time data3" style="height:100%;">
                                <span class="blind">data 타입 3</span>
                            </span>
                        </button>
                    </li>
                    <li class="item">
                        <div class="text_box">
                            <strong class="day">20(목)</strong>
                            <span class="time">00시간</span>
                        </div>
                        <button type="button" class="graph">
                            <span class="time data1" style="height:100%;">
                                <span class="blind">data 타입 1</span>
                            </span>
                        </button>
                    </li>
                    <li class="item">
                        <div class="text_box">
                            <strong class="day">21(금)</strong>
                            <span class="time">00시간</span>
                        </div>
                        <button type="button" class="graph">
                            <span class="time data1" style="height:40%;">
                                <span class="blind">data 타입 1</span>
                            </span>
                            <span class="time data3" style="height:40%;">
                                <span class="blind">data 타입 3</span>
                            </span>
                        </button>
                    </li>
                    <li class="item">
                        <div class="text_box">
                            <strong class="day sat">22(토)</strong>
                            <span class="time">휴일</span>
                        </div>
                        <button type="button" class="graph">
                            <span class="time data2" style="height:20%;">
                                <span class="blind">data 타입 2</span>
                            </span>
                        </button>
                    </li>
                    <li class="item">
                        <div class="text_box">
                            <strong class="day sun">23(일)</strong>
                            <span class="time">휴일</span>
                        </div>
                        <button type="button" class="graph"></button>
                    </li>
                </ul>
            </div>
        </div>
        `;
    return chart;
};

export { makeChart };
