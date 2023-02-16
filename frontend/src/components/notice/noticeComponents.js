const noticePreview = (notice) => {
    return /*html*/ `
    <tr class="notice-wrapper" data-set="${notice.idx}">
        <td class="notice-id">${notice.idx}</td>
        <td class="notice-title">${notice.title}</td>
        <td class="notice-date">${new Date(notice.createdAt)
            .getFullYear()
            .toString()
            .slice(2, 4)}-${(
        '00' + (new Date(notice.createdAt).getMonth() + 1).toString()
    ).slice(-2)}-${(
        '00' + new Date(notice.createdAt).getDate().toString()
    ).slice(-2)}</td>
        <td class="notice-watch">
            <i class="fa-regular fa-user"></i>
            <div class='notice-watch-num'>${notice.views}</div>
        </td>
    </tr>
    `;
};

export { noticePreview };
