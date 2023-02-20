import { http } from '../http.js';

const NoticeService = {
    // 전체 공지 사항 조회
    getAllNotices: async () => {
        const response = await http.get('/notice/list');
        return response.data.data;
    },
    // 단일 공지 사항 조회
    getNotice: async (id) => {
        const response = await http.get(`/notice/${id}`);
        return response.data.data;
    },
    // 공지 사항 생성
    postNotice: async (title, content) => {
        const response = await http.post(`/notice`, { title, content });
        return response.data.data;
    },
};
export { NoticeService };
