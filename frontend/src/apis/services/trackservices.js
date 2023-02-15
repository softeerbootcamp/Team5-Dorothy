import { http } from '../http.js';

const TrackService = {
    //트랙 생성
    postTrack: (trackname) => {
        http.post(`/track?name=${trackname}`, {});
    },

    //나의 트랙 조회
    getTrack: () => {
        http.get(`/tracks/list`, {});
    },

    //트랙 가입
    postTrackMember: () => {
        http.post('/track/member');
    },
};

export { TrackService };
