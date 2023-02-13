const placeCard = (id, name, img) => {
    return `
    <figure class="place-wrapper" data-set="${id}">
        <img class="place-image" src=${img}></img>
        <figcaption class="place-name">
            ${name}
        </figcaption>
    </figure>
    `;
};

export { placeCard };
