import { getCurrentWeek } from './currentWeek';
import { getMonthAttendance } from '../../../apis/attend';
import { qs } from '../../../utils/selector';

const chartTest = async (day) => {
    const items = await getMonthAttendance(3);
    items.map((item) => {
        if (day.split('(')[0] === item.date.split('-')[2]) {
            const itemNum = item.present + item.tardy + item.absent;
            const weeklyChart = `                    
                <li class="item">
                    <div class="text_box">
                        <strong class="day">${day}</strong>
                        <span class="time">${itemNum}명</span>
                    </div>
                    <button type="button" class="graph">
                        <span class="time data1" style="height:${
                            (item.present / itemNum) * 100
                        }%;">
                            <span class="blind">data 타입 1</span>
                        </span>
                        <span class="time data2" style="height:${
                            (item.tardy / itemNum) * 100
                        }%;">
                            <span class="blind">data 타입 2</span>
                        </span>
                        <span class="time data3" style="height:${
                            (item.absent / itemNum) * 100
                        }%;">
                            <span class="blind">data 타입 3</span>
                        </span>
                    </button>
                </li>`;
            qs('.axis_x').insertAdjacentHTML('beforeend', weeklyChart);
        }
    });

    // items.map((item) => {
    //     let num = 0;
    //     for (let i = 0; i < 7; i++) {
    //         console.log(
    //             getCurrentWeek()[i].split('(')[0],
    //             item.date.split('-')[2],
    //         );
    //         if ((getCurrentWeek()[i] = item.date.split('-')[2])) {
    //             items.key()
    //         }
    //         console.log(num);
    //     }
    // });
};

const weeklyChart = () => {
    const axis_x = [0, 10, 20, 30, 40];
    chartTest();
    const chart =
        /*html*/
        `
        <div class="weekly-ratio-wrapper hidden">
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
                            chartTest(day);
                        })
                        .join('')}
                </ul>
            </div>
        </div>
        `;
    return chart;
};

export { weeklyChart };
