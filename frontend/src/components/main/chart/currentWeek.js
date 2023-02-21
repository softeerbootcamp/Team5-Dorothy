import { daysOfWeek } from '../../calendar/constants';

function getCurrentWeek() {
    const Today = new Date();
    Today.setDate(Today.getDate() - 6);
    const result = [];
    for (let i = 0; i < 7; i++) {
        const text = `${Today.getDate()}(${daysOfWeek[Today.getDay()]})`;
        Today.setDate(Today.getDate() + 1);
        result.push(text);
    }
    return result;
}

export { getCurrentWeek };
