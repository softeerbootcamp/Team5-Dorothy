const hourCard = (hour) => {
    return /*html*/ `
    <div class="hour-card">
        <h6 class="time-hour">${hour}시</h6>
        <div class="minute-select">
            <figure class="time-box" id="time-${hour}-00">00분</figure>
            <figure class="time-box" id="time-${hour}-15">15분</figure>
            <figure class="time-box" id="time-${hour}-30">30분</figure>
            <figure class="time-box" id="time-${hour}-45">45분</figure>
        </div>
    </div>`;
};

export { hourCard };
