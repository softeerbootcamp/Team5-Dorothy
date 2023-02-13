const noticePreview = (title) => {
    return `
    <article class="notice-wrapper">
        <div class="notice-title">${title}</div>
        <i class="fa-solid fa-comment-dots show-notice"></i> 
    </article>
    `;
};

const noticeBody = (title, content, check, denial) => {};

export { noticePreview, noticeBody };
