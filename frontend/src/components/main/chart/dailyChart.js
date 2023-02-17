import { getDayAttendance } from '../../../apis/attend';
import { qs } from '../../../utils/selector';

const chartTest = async () => {
    const members = await getDayAttendance(3);
    const memberNum = members.length;
    const attend =
        members.filter((member) => {
            return member.type === 'PRESENT';
        }).length / memberNum;
    const late =
        members.filter((member) => {
            return member.type === 'TARDY';
        }).length / memberNum;
    const absent =
        members.filter((member) => {
            return member.type === 'ABSENT';
        }).length / memberNum;
    const ratio = `
    <div class="attend" style="width:${attend * 100}%;">
    <div class="late" style="width:${late * 100}%;">
    <div class="absent" style="width:${absent * 100}%;">
    ${absent * 100}%</div> 
    ${late * 100}%</div>
    ${attend * 100}%</div>    `;
    qs('.daily-ratio-wrapper').insertAdjacentHTML('beforeend', ratio);
};

const dailyChart = () => {
    chartTest();
    const chart = `
    <section class="daily-ratio-wrapper">

    </section>
    `;
    return chart;
};

export { dailyChart };
