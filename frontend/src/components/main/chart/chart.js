import { daysOfWeek } from '../../calendar/constants';

const makeChart = () => {
    function getCurrentWeek() {
        const Today = new Date();
        const LastDate = Today.getDate();
        const day = Today.getDay();
        const result = [];
        for (let i = 0; i < 6; i++) {
            const text = LastDate + i + '(' + daysOfWeek[day + i] + ')';
            result.push(text);
        }
        return result;
    }

    const chart =
        /*html*/
        `
        <div class="vertical_chart_box">
            <div class="chart_box">
                <ul class="axis_y">
                    <li class="item">
                        0<span class="blind">명</span>
                    </li>
                    <li class="item">
                        10<span class="blind">명</span>
                    </li>
                    <li class="item">
                        20<span class="blind">명</span>
                    </li>
                    <li class="item">
                        30<span class="blind">명</span>
                    </li>
                    <li class="item">
                        40<span class="blind">명</span>
                    </li>
                </ul>
                <ul class="axis_x">
                    ${getCurrentWeek()
                        .map((day) => {
                            return `                    
                        <li class="item">
                            <div class="text_box">
                                <strong class="day">${day}</strong>
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
                        </li>`;
                        })
                        .join('')}
                </ul>
            </div>
        </div>
        `;
    return chart;
};

export { makeChart };
