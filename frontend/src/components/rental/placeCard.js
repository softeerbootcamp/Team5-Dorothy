const placeCard = (id, name, img) => {
    return `
    <a class="place-wrapper" href="rental/${id}">
        <img class="place-image" src=${img}></img>
        <figcaption class="place-name">
            ${name}
        </figcaption>
    </a>
    `;
};

export { placeCard };
