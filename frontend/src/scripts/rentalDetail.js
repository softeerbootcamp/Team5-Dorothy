import { qs, qsa } from '../utils/selector';
import { GetHours, PostReservation } from '../apis/rental';

const holdClickReserve = () => {
    let currentTimeBox;
    qs('.time-container').addEventListener('click', (event) => {
        currentTimeBox = event.target.closest('.time-box');
        if (currentTimeBox) {
            currentTimeBox.classList.toggle('checked');
        }
    });

    qs('.time-container').addEventListener('mousedown', (event) => {
        function onMouseMove(event) {
            const elemBelow = document.elementFromPoint(
                event.clientX,
                event.clientY,
            );
            const targetTimeBox = elemBelow.closest('.time-box');

            if (targetTimeBox) {
                if (currentTimeBox !== targetTimeBox) {
                    targetTimeBox.classList.toggle('checked');
                    currentTimeBox = targetTimeBox;
                }
            }

            currentTimeBox = targetTimeBox;
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousemove', onMouseMove);
        function onMouseUp() {
            currentTimeBox = null;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
        document.addEventListener('mouseup', onMouseUp);
    });

    qs('.rental-confirm').addEventListener('click', () => {
        MakeReservation();
    });
};

const ReservedTime = async (placeId) => {
    const TimeBoxes = qsa('.time-box');
    const TimeBooked = await GetHours(placeId);
    NodeList.prototype.find = Array.prototype.find;

    TimeBooked.data.forEach((time) => {
        const TargetTime = TimeBoxes.find((TimeBox) => {
            return TimeBox.getAttribute('data-time') === time.startTime;
        });
        TargetTime.classList.add('unabled');
    });

    qs('.rental-left').innerHTML = `${
        qsa('.time-box').length - qsa('.unabled').length
    }`;
};

const MakeReservation = () => {
    const CheckedTimeBoxes = qsa('.checked');
    let ReserveTime = [];

    CheckedTimeBoxes.forEach((TimeBox) => {
        ReserveTime.push(TimeBox.getAttribute('data-time'));
    });

    console.log(ReserveTime);
    PostReservation(location.pathname.split('/')[2], ReserveTime);
};

export { holdClickReserve, ReservedTime };
