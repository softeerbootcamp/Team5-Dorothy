import { http } from '../http.js';

const TrackService = {
    //트랙 생성
    postTrack: async (trackname) => {
        const response = await http.post(`/api/track?name=${trackname}`, {});

        return response;
    },

    //나의 트랙 조회
    getTrack: async () => {
        const response = await http.get(`/api/track/list`);
        return response.data.data;
    },

    //트랙 가입
    postTrackMember: () => {
        http.post('/track/member');
    },
};

export { TrackService };
