const modal = (code, message) => {
    const ModalTamplate = `
    <div class='modal-wrapper'>
    ${code == 'CREATED' ? successModal(message) : failModal(message)}
    </div>
    `;
    return ModalTamplate;
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

export { modal };
