const addTrackCard = ({ icon, title, bodyTitle, placeholder, msg }) => {
    console.log({ icon, title, bodyTitle, placeholder, msg });
    const addTrackCardTemplate = `
    <figure class="track-add" id="track-join">
        <div class="track-front">
            <i class="${icon}"></i>
            <figcaption class="track-name">${title}</figcaption>
        </div>
        <div class="track-back">
            <p class="track-body">${bodyTitle}</p>
            <input class="track-input" id="track-code" type="text" placeholder="${placeholder}" />
            <button class="track-button" disabled="true">${msg}</button>
        </div>
    </figure>
    `;
    return addTrackCardTemplate;
};

export { addTrackCard };
