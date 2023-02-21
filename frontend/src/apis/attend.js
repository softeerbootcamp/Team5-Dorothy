import { stateModal } from '../components/modal';
import { AttendService } from './services/attendservices';
import { navigateTo } from '../router';
import { qs } from '../utils/selector';

export const postAttendance = async (trackIdx, { x, y }) => {
    try {
        const response = await AttendService.postAttendance(trackIdx, { x, y });
        succeedTrack('OK', '출석체크 성공');
        return response.data;
    } catch (error) {
        failTrack();
        console.log(error);
    }
};

export const getDayAttendance = async (trackIdx) => {
    try {
        const response = await AttendService.getDayAttendance(trackIdx);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getMonthAttendance = async (trackIdx) => {
    try {
        const response = await AttendService.getMonthAttendance(trackIdx);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const setmodal = (code, message) =>
    qs('.modal-place').insertAdjacentHTML(
        'beforeend',
        stateModal(code, message),
    );

const succeedTrack = (code, message) => {
    setmodal(code, message);
};

const failTrack = () => {
    const code = 'fail';
    const message = '출석확인실패';
    setmodal(code, message);
};
