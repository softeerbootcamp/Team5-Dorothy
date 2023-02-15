let openPopup = false;

const stateModal = (code, message) => {
    openPopup = true;
    console.log(code);
    const ModalTemplate = `
    <div class='modal-wrapper'>
    ${
        code === 'CREATED' || code === 'OK'
            ? successModal(message)
            : failModal(message)
    }
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
    <i class="fa-solid fa-circle-exclamation"></i>
    <p>${text}</p>
    `;
    return failModalTamplate;
};

const successModal = (text) => {
    const successModalTemplate = `
    <i class="fa-solid fa-circle-check"></i>
    <p>${text}</p>`;
    return successModalTemplate;
};

export { stateModal };
