import { NoticeService } from './services/noticeservices';
import { stateModal } from '../components/modal';
import { qs } from '../utils/selector';
import { navigateTo } from '../router';

//공지 사항 전체 조회
export const GetAllNotices = async () => {
    try {
        const response = await NoticeService.getAllNotices();
        return response;
    } catch (error) {
        failNotice(error);
    }
};

//공지 사항 단일 조회
export const GetNotice = async (id) => {
    try {
        const response = await NoticeService.getNotice(id);
        return response;
    } catch (error) {
        failNotice(error);
    }
};

//공지 사항 생성
export const PostNotice = async (title, content) => {
    try {
        const response = await NoticeService.postNotice(title, content);
        succeedNotice('OK', '공지사항 등록을 성공하였습니다.');
        navigateTo('/notice');
        return response;
    } catch (error) {
        failNotice('fail', '공지사항 등록을 실패하였습니다.');
    }
};
const setmodal = (code, message) =>
    qs('.modal-place').insertAdjacentHTML(
        'beforeend',
        stateModal(code, message),
    );

const succeedNotice = (code, message) => {
    setmodal(code, message);
    navigateTo('/notice');
};

const failNotice = async (code, message) => {
    setmodal(code, message);
};
