import { TrackService } from './services/trackservices';
import { navigateTo } from '../router';
import { stateModal } from '../components/modal';
import { qs } from '../utils/selector';
import { trackCard } from '../components/track/trackCard';

//트랙 생성
export const PostTrack = async (trackname) => {
    try {
        const response = await TrackService.postTrack(trackname);
        qs('#track-make').insertAdjacentHTML(
            'beforebegin',
            trackCard('/src/assets/soundless.svg', response.data.data.name),
        );
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
        console.log(error.response);
        navigateTo('/');
    }
};

//트랙 가입
export const PostTrackMember = async (trackIdx, joinCode) => {
    try {
        const response = await TrackService.postTrackMember(trackIdx, joinCode);
        qs('#track-join').insertAdjacentHTML(
            'beforebegin',
            trackCard('/src/assets/soundless.svg', response.data.data.name),
        );
        succeedTrack(response.data);
    } catch (error) {
        failTrack();
        return Promise.reject(error.message, '트랙 가입 실패');
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

const failTrack = () => {
    const code = 'fail';
    const message = '트랙 가입 실패';
    setmodal(code, message);
};
