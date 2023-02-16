import { navigateTo } from '../router';
import { qs } from '../utils/selector';
import { PostNotice } from '../apis/notice';

const setNoticeEvent = () => {
    qs('.big-content-container').addEventListener('click', (e) => {
        navigator(e);
    });
};

const setNoticeAddEvent = () => {
    qs('.notice-add-btn').addEventListener('click', (e) => {
        console.log('clicked');
        setPostNotice(e);
    });
};

const setPostNotice = (e) => {
    qs('.notice-add-btn').addEventListener('click', (e) => {
        const titleInput = qs('.notice-title-input-wrapper').value;
        const contentInput = qs('.notice-content-input-wrapper').value;
        if (titleInput.length === 0 || contentInput.length === 0) {
            return;
        }
        PostNotice(titleInput, contentInput);
    });
};

const navigator = (e) => {
    if (e.target.closest('tr') === null) return;
    const cardID = e.target.closest('tr').getAttribute('data-set');
    navigateTo('/notice/' + cardID);
};
export { setNoticeEvent, setNoticeAddEvent };
