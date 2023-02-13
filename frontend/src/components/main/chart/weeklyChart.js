import { getCurrentWeek } from './currentWeek';

const axis_x = [0, 10, 20, 30, 40];

const weeklyChart = () => {
    const chart =
        /*html*/
        `
        <div class="vertical_chart_box hidden">
            <div class="chart_box">
                <ul class="axis_y">
                ${axis_x
                    .map((x) => {
                        return `<li class="item">
                        ${x}<span class="blind">명</span>
                    </li>`;
                    })
                    .join('')}
                </ul>
                <ul class="axis_x">
                    ${getCurrentWeek()
                        .map((day) => {
                            return `                    
                        <li class="item">
                            <div class="text_box">
                                <strong class="day">${day}</strong>
                                <span class="time">00명</span>
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

export { weeklyChart };
