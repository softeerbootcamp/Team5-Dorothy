import { getCurrentWeek } from './chart/currentWeek';
import { profile } from './profileBox';
import { getDayAttendance, getMonthAttendance } from '../../apis/attend';
import { GetAllNotices } from '../../apis/notice';
import { noticePreview } from '../notice/noticeComponents';
import { getMyReserved } from '../../apis/rental';
import { qs } from '../../utils/selector';
import { userTrackID } from '../../store/user';

const latelyNotice = async () => {
    const notices = await GetAllNotices();
    const newNotice = notices[0];
    qs('.news-content-wrapper').insertAdjacentHTML(
        'afterbegin',
        noticePreview(newNotice),
    );
};
const weekAttendance = async () => {
    const weekAttendance = await getMonthAttendance(userTrackID.trackID);
    const length = weekAttendance.length;
    const week = weekAttendance.slice(length - 7, length);
    let i = 0;
    getCurrentWeek()
        .map((day) => {
            const temp = `
            <article class="calendar">
                <div class="calendar-head">
                    <span class="day">${day}</span>
                </div>
                <div class="calendar-week-type">${week[i].type}</div>
            </article>`;
            qs('.calendar-wrapper').insertAdjacentHTML('beforeend', temp);
            i++;
        })
        .join('');
};
const myReservation = async () => {
    const myReserveLog = await getMyReserved();
    let myReserveTime = [];

    myReserveLog.data.forEach((myTime) => {
        const myTimeParsed = myTime.startTime.split(':');
        let startDateObj = new Date();
        startDateObj.setHours(myTimeParsed[0]);
        startDateObj.setMinutes(myTimeParsed[1]);
        let endDateObj = new Date();
        endDateObj.setHours(myTimeParsed[0]);
        endDateObj.setMinutes(myTimeParsed[1]);
        endDateObj.setMinutes(endDateObj.getMinutes() + 15);

        if (myReserveTime.length === 0) {
            myReserveTime.push({
                idx: myTime.placeIdx,
                startTime: `${
                    startDateObj.getHours() < 10
                        ? '0' + startDateObj.getHours()
                        : startDateObj.getHours()
                }:${
                    startDateObj.getMinutes() < 10
                        ? '0' + startDateObj.getMinutes()
                        : startDateObj.getMinutes()
                }`,
                endTime: `${
                    startDateObj.getHours() < 10
                        ? '0' + startDateObj.getHours()
                        : startDateObj.getHours()
                }:${
                    endDateObj.getMinutes() < 10
                        ? '0' + endDateObj.getMinutes()
                        : endDateObj.getMinutes()
                }`,
                endMinute: endDateObj,
            });
        } else {
            let lastTime = myReserveTime.pop();
            if (
                myTime.placeIdx === lastTime.idx &&
                `${
                    startDateObj.getHours() < 10
                        ? '0' + startDateObj.getHours()
                        : startDateObj.getHours()
                }:${
                    startDateObj.getMinutes() < 10
                        ? '0' + startDateObj.getMinutes()
                        : startDateObj.getMinutes()
                }` === lastTime.endTime
            ) {
                let newEndMinute = lastTime.endMinute;
                newEndMinute.setMinutes(newEndMinute.getMinutes() + 15);
                myReserveTime.push({
                    idx: lastTime.placeIdx,
                    startTime: lastTime.startTime,
                    endTime: `${
                        newEndMinute.getHours() < 10
                            ? '0' + newEndMinute.getHours()
                            : newEndMinute.getHours()
                    }:${
                        newEndMinute.getMinutes() < 10
                            ? '0' + newEndMinute.getMinutes()
                            : newEndMinute.getMinutes()
                    }`,
                    endMinute: newEndMinute,
                });
            } else {
                myReserveTime.push(lastTime);
                myReserveTime.push({
                    idx: myTime.placeIdx,
                    startTime: `${
                        startDateObj.getHours() < 10
                            ? '0' + startDateObj.getHours()
                            : startDateObj.getHours()
                    }:${
                        startDateObj.getMinutes() < 10
                            ? '0' + startDateObj.getMinutes()
                            : startDateObj.getMinutes()
                    }`,
                    endTime: `${
                        startDateObj.getHours() < 10
                            ? '0' + startDateObj.getHours()
                            : startDateObj.getHours()
                    }:${
                        endDateObj.getMinutes() < 10
                            ? '0' + endDateObj.getMinutes()
                            : endDateObj.getMinutes()
                    }`,
                    endMinute: endDateObj,
                });
            }
        }
    });
    myReserveTime.map((rentalLog) => {
        const rentalCard = `
        <div class="rental">
            <div class="rental-icon">
                <img class="place-icon" src="/src/assets/${rentalLog.idx}.svg" />
            </div>
            ${rentalLog.startTime}~${rentalLog.endTime}
        </div>
        `;
        qs('.rental-card-wrapper').insertAdjacentHTML('beforeend', rentalCard);
    });
};

const userMain = () => {
    latelyNotice();
    weekAttendance();
    myReservation();
    const userMainTemplate =
        /*html*/
        `
        <div class="main-content-container">
            ${profile()}
            <section class="user-content-container">
                <div class="attendance-wrapper"><i class="fa-solid fa-bell-concierge"></i> 나의 출석현황
                    <div class="calendar-wrapper">
                    </div>
                </div>
                <div class="contour"></div>
                <div class="rental-wrapper"><i class="fa-solid fa-person-shelter"></i> 나의 공간대여
                    <div class="rental-card-wrapper">
                    </div>
                </div>
                <div class="contour"></div>
                <div class="news-wrapper"><i class="fa-regular fa-newspaper new-notice"></i> 최근 공지사항
                </div>
                <table class="news-content-wrapper"></table>
            </section>
        </div>
        `;

    return userMainTemplate;
};

export { userMain };
