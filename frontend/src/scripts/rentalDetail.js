import { qs } from '../utils/selector';

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

            if (targetTimeBox && currentTimeBox !== targetTimeBox) {
                console.log('un-checked!');
                targetTimeBox.classList.remove('checked');
                currentTimeBox = targetTimeBox;
                return;
            } else if (targetTimeBox) {
                if (!targetTimeBox.classList.contains('checked')) {
                    console.log('checked!');
                    targetTimeBox.classList.add('checked');
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
};

export { holdClickReserve };
