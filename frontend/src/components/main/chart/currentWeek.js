import { daysOfWeek } from '../../calendar/constants';

function getCurrentWeek() {
    const Today = new Date();
    const LastDate = Today.getDate() - 6;
    const day = Today.getDay();
    const result = [];
    for (let i = 0; i < 7; i++) {
        const text =
            LastDate + i + '(' + daysOfWeek[i - 1 === -1 ? 6 : i - 1] + ')';
        result.push(text);
    }
    return result;
}

export { getCurrentWeek };
