const noticePreview = (title) => {
    return `
    <tr class="Anotice-wrapper" data-set="1">
        <th class="notice-id">1</th>
        <th class="notice-title">${title}</th>
        <th class="notice-date">21-01-11</th>
        <th class="notice-watch">
        <i class="fa-regular fa-user"></i>
        <div class='notice-watch-num'>4</div>
        </th>
    </tr>
    `;
};

const noticeBody = (title, content, check, denial) => {};

export { noticePreview, noticeBody };
