import { RentalService } from './services/rentalServices';
import { stateModal } from '../components/modal';
import { qs } from '../utils/selector';
import { navigateTo } from '../router';

//대여 가능한 공간 조회
export const GetRental = async () => {
    try {
        const response = await RentalService.getRentalSpace();
        return response;
    } catch (error) {
        console.log(error.response);
    }
};

//공간 대여 현황
export const GetHours = async (placeIdx) => {
    try {
        const response = await RentalService.getRentalHours(placeIdx);
        return response;
    } catch (error) {
        console.log(error.response);
    }
};

//공간 대여 신청
export const PostReservation = async (placeIdx, reserveTimes) => {
    try {
        const data = [];
        reserveTimes.forEach((reserveTime) => {
            data.push({ time: reserveTime });
        });
        const response = await RentalService.postReservation(placeIdx, data);
        succeedReserve(response);
        navigateTo('/rental');
    } catch (error) {
        console.log(error.response);
        failReserve();
    }
};
export const getMyReserved = async () => {
    try {
        const response = await RentalService.getMyReservation();
        console.log(response);
        return response;
    } catch (error) {
        console.log(error.response);
    }
};

const setmodal = (code, message) =>
    qs('.modal-place').insertAdjacentHTML(
        'beforeend',
        stateModal(code, message),
    );

const succeedReserve = (response) => {
    const code = response.code;
    const message = response.message;
    setmodal(code, message);
};

const failReserve = () => {
    const code = 'fail';
    const message = '공간 예약 실패';
    setmodal(code, message);
};
const failInquire = () => {
    const code = 'fail';
    const message = '예약 내역 조회 실패';
    setmodal(code, message);
};
