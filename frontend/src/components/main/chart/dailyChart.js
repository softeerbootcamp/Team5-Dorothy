import { getDayAttendance } from '../../../apis/attend';
import { qs } from '../../../utils/selector';

const chartTest = async () => {
    const members = await getDayAttendance(3);
    const memberNum = members.length;
    const attend = members.filter((member) => {
        return member.type === 'PRESENT';
    }).length;
    const late = members.filter((member) => {
        return member.type === 'TARDY';
    }).length;
    const absent = members.filter((member) => {
        return member.type === 'ABSENT';
    }).length;
    const ratio = `
    <div class="attend" style="width:${
        (attend / memberNum) * 100
    }%; z-index:100-${attend};"></div> 
    <div class="absent" style="width:${
        (absent / memberNum) * 100
    }%;z-index:100-${absent};"></div>
    <div class="late" style="width:${
        (late / memberNum) * 100
    }%;z-index:100-${late};"></div> 
    `;
    console.log((attend / memberNum) * 100);
    const ratioDescription = `
    <div class='ratioDescription'>
        <div class='attend-description'> 출석 :${attend}</div>
        <div class='late-description'> 지각 :${late}</div>
        <div class='absent-description'> 결석 :${absent}</div>
    </div>
    `;
    qs('.daily-ratio-wrapper').insertAdjacentHTML('afterbegin', ratio);
    qs('.daily-ratio-wrapper').insertAdjacentHTML(
        'beforeend',
        ratioDescription,
    );
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
