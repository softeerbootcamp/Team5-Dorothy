import { UserService } from './services/userservice';

//트랙 생성
export const PostTrack = async () => {
    try {
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(response.code, response.message),
            );
    } catch (error) {
        console.log(error);
        document
            .querySelector('.modal-place')
            .insertAdjacentHTML(
                'beforeend',
                stateModal(error.code, error.message),
            );
        return Promise.reject(error.message, '트랙 생성 실패');
    }
};

//트랙 조회
export const GetTrack = async () => {
    try {
        const response = await UserService.getTrack();
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message, '트랙 조회 실패');
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
