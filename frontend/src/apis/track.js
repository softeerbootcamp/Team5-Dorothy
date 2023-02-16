import { TrackService } from './services/trackservices';
import { navigateTo } from '../router';
import { stateModal } from '../components/modal';
import { qs } from '../utils/selector';

//트랙 생성
export const PostTrack = async (trackname) => {
    try {
        const response = await TrackService.postTrack(trackname);
        console.log(response);
        succeedTrack(response.data);
    } catch (error) {
        console.log(error.status);

        return Promise.reject(error.message, '트랙 생성 실패');
    }
};

//트랙 조회
export const GetTrack = async () => {
    try {
        const response = await TrackService.getTrack();
        return response;
    } catch (error) {
        console.log(error);
        navigateTo('/');
    }
};

//트랙 가입
export const PostTrackMember = async () => {
    try {
        const response = await UserService.postTrackMember();
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(response.code, response.message),
            );
    } catch (error) {
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(error.code, error.message),
            );
        return Promise.reject(error.message, '트랙 가입 실패');
    }
};

//트랙 멤버 조회
export const GetTrackMember = async () => {
    try {
        const response = await UserService.getTrackMember();
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message, '트랙 멤버 조회 실패');
    }
};

const setmodal = (code, message) =>
    qs('.modal-place').insertAdjacentHTML(
        'beforeend',
        stateModal(code, message),
    );

const succeedTrack = (response) => {
    const code = response.code;
    const message = response.message;
    setmodal(code, message);
};

const failTrack = async (error) => {
    const code = await error.response.data.code;
    const message = await error.response.data.message;
    setmodal(code, message);
};
