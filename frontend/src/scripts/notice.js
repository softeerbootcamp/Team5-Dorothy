import { navigateTo } from '../router';
import { qs } from '../utils/selector';
import { PostNotice } from '../apis/notice';
import { userRole } from '../store/user';
import { stateModal } from '../components/modal';

const setNoticeEvent = () => {
    qs('.big-content-container').addEventListener('click', (e) => {
        navigator(e);
    });
    if (userRole() === 'ADMIN') {
        qs('.add-notice-btn').addEventListener('click', () => {
            linkToAdd();
        });
    }
};

const setNoticeAddEvent = () => {
    qs('.notice-add-btn').addEventListener('click', (e) => {
        setPostNotice(e);
    });
    qs('.link-to-notice').addEventListener('click', (e) => {
        navigateTo('/notice');
    });
};

const setNoticeDetailEvent = () => {
    qs('.notice-edit-btn').addEventListener('click', (e) => {
        navigateTo('/notice');
    });
};

const linkToAdd = () => {
    navigateTo('/noticeadd');
};
const setmodal = (code, message) =>
    qs('.modal-place').insertAdjacentHTML(
        'beforeend',
        stateModal(code, message),
    );

const setPostNotice = (e) => {
    const titleInput = qs('.notice-title-input-wrapper').value;
    const contentInput = qs('.notice-content-input-wrapper').value;
    if (titleInput.length === 0 || contentInput.length === 0) {
        setmodal('error', '입력을 확인해주세요');
        return;
    }
    PostNotice(titleInput, contentInput);
};

const navigator = (e) => {
    if (e.target.closest('.notice-wrapper') === null) return;
    const cardID = e.target.closest('.notice-wrapper').getAttribute('data-set');
    navigateTo('/notice/' + cardID);
};
export { setNoticeEvent, setNoticeAddEvent, setNoticeDetailEvent };
