import { http } from '../http.js';

//const BASE_URL = 'https://dorothy-5z.site/api/v1';

const AttendService = {
    //출석(지각, 결석) 요청
    postAttendance: async (x, y) => {
        const response = await http.get(`/api/attendance/${trackIdx}`, {
            x,
            y,
        });
        return response.data;
    },

    //출석 현황 조회(당일)
    getDayAttendance: async (trackIdx) => {
        const response = await http.get(`/api/attendance/day/${trackIdx}`);
        return response.data;
    },

    //출석 현황 조회(월간)
    getMonthAttendance: async (trackIdx) => {
        const response = await http.get(`/api/v1/attendance/month/${trackIdx}`);
        return response.data;
    },
};
export { AttendService };
