const placeCard = (id, name) => {
    return `
    <figure class="place-wrapper" data-set="${id}">
        <img class="place-image" src='/src/assets/${id}.svg' draggable='false'></img>
        <figcaption class="place-name">
            ${name}
        </figcaption>
    </figure>
    `;
};

export { placeCard };
