import { UserService } from './services/userservice';

//공지 사항 전체 조회
export const GetWholeNotices = async () => {
    try {
        const response = await UserService.getWholeNotice();
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message, '공지 전체 조회 실패');
    }
};

//공지 사항 단일 조회
export const GetNotice = async (id) => {
    try {
        const response = await UserService.getWholeNotice(id);
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message, '공지 단일 조회 실패');
    }
};
