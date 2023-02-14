const attendRatio = 75;
const lateRatio = 60;
const absentRatio = 25;

const dailyChart = () => {
    const chart = `
    <section class="daily-ratio-wrapper">
            <div class="attend" style="width:${attendRatio}%;">
            <div class="late" style="width:${lateRatio}%;">
            <div class="absent" style="width:${absentRatio}%;">
            ${absentRatio}%</div> 
            ${lateRatio}%</div>
            ${attendRatio}%</div>    

    </section>
    `;
    return chart;
};

export { dailyChart };
