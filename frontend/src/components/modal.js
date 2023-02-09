let openPopup = false;

const stateModal = (code, message) => {
    openPopup = true;
    const ModalTemplate = `
    <div class='modal-wrapper'>
    ${code == 'CREATED' ? successModal(message) : failModal(message)}
    </div>
    `;
    setTimeout(closeModal, 4000);
    return ModalTemplate;
};

const closeModal = () => {
    const openModal = document.querySelector('.modal-wrapper');
    if (!openPopup) return;
    if (openModal !== null) {
        openPopup = false;
        openModal.remove();
    }
};

const failModal = (text) => {
    const failModalTamplate = `
    <i class="fa-solid fa-circle-check"></i>
    <p>${text}</p>
    `;
    return failModalTamplate;
};

const successModal = (text) => {
    const successModalTemplate = `
    <i class="fa-solid fa-circle-exclamation"></i>
    <p>${text}</p>`;
    return successModalTemplate;
};

const codeModal = (role, code = '') => {
    let placeHolder = null;
    role === 'MEMBER'
        ? (placeHolder = '초대 코드를 입력해 주세요')
        : (placeHolder = `추가할 트랙명을 입력해 주세요`);
    const codeModalTemplate = `
    <div class='code-modal'>
        <input type='text' class='add-track-input' placeholder="${placeHolder}">
        <div class='track-btn-wrapper'>
            <button class='add-track-btn'>Cancle</button>
            <input type='submit' value='Add' class='add-track-btn'>
        </div>
    </div>
    `;
    return codeModalTemplate;
};

export { stateModal, codeModal };
