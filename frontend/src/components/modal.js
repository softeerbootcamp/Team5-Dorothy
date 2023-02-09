let openPopup = false;

const stateModal = (code, message) => {
    openPopup = true;
    const ModalTamplate = `
    <div class='modal-wrapper'>
    ${code == 'CREATED' ? successModal(message) : failModal(message)}
    </div>
    `;
    setTimeout(closeModal, 4000);
    return ModalTamplate;
};

const closeModal = () => {
    const openModal = document.querySelector('.modal-wrapper');
    console.log(openModal);
    if (!openPopup) return;
    if (openModal !== null) {
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
    const successModalTamplate = `
    <i class="fa-solid fa-circle-exclamation"></i>
    <p>${text}</p>`;
    return successModalTamplate;
};

const trackModal = () => {};

export { stateModal };
