const attendRatio = 75;
const lateRatio = 60;
const absentRatio = 25;

const dailyChart = () => {
    const chart = `
    <section class="daily-ratio-wrapper">
            <span class="attend" style="width:${attendRatio}%;">
            <span class="late" style="width:${lateRatio}%;">
            <span class="absent" style="width:${absentRatio}%;">
            ${absentRatio}%</span> 
            ${lateRatio}%</span>
            ${attendRatio}%</span>    

    </section>
    `;
    return chart;
};

export { dailyChart };
