const placeCard = (name, img) => {
    return `
    <figure class="place-wrapper">
        <img class="place-image" src=${img}></img>
        <figcaption class="place-name">
            ${name}
        </figcaption>
    </figure>
    `;
};

export { placeCard };
