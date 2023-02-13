import { daysOfWeek } from '../../calendar/constants';

function getCurrentWeek() {
    const Today = new Date();
    const LastDate = Today.getDate();
    const day = Today.getDay();
    const result = [];
    for (let i = 0; i < 6; i++) {
        const text = LastDate + i + '(' + daysOfWeek[day + i] + ')';
        result.push(text);
    }
    return result;
}

export { getCurrentWeek };
