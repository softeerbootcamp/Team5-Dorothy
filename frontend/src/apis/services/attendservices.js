import { http } from '../http.js';

const AttendService = {
    //출석(지각, 결석) 요청
    postAttendance: async (trackIdx, { x, y }) => {
        const response = await http.post(`/attendance/${trackIdx}`, {
            x,
            y,
        });
        return response.data;
    },

    //출석 현황 조회(당일)
    getDayAttendance: async (trackIdx) => {
        const response = await http.get(`/attendance/day/${trackIdx}`);
        return response.data;
    },

    //출석 현황 조회(월간)
    getMonthAttendance: async (trackIdx) => {
        const response = await http.get(`/attendance/month/${trackIdx}`);
        return response.data;
    },
};
export { AttendService };
