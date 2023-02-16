import { http } from '../http.js';

//const BASE_URL = 'https://dorothy-5z.site/api/v1';

const NoticeService = {
    // 전체 공지 사항 조회
    getAllNotices: async () => {
        const response = await http.get('/api/notice/list');
        console.log(response.data);
        return response.data.data;
    },
    // 단일 공지 사항 조회
    getNotice: async (id) => {
        const response = await http.get(`/api/notice/${id}`);
        return response.data.data;
    },
    // 공지 사항 생성
    postNotice: async (title, content) => {
        const response = await http.post(`/api/notice`, { title, content });
        return response.data.data;
    },
};
export { NoticeService };
