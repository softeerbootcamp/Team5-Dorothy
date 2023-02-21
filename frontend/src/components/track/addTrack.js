const trackManager = () => {
    const addTrackTemplate = /*html */ `
        <figure class="track-add" id="track-make">
            <div class="track-front">
                <i class="fa-solid fa-circle-plus track-add-icon"></i>
                <figcaption class="track-name">트랙 추가하기</figcaption>
            </div>
            <div class="track-back">
                <p class="track-body">새로운 트랙의 제목을 입력해주세요</p>
                <input class="track-input" id="track-title" type="text" placeholder="새로운 트랙" />
                <div class="track-back-button">
                    <button class="track-button" id="track-make-cancel">취소</button>
                    <button class="track-button" id="track-make-confirm" disabled="true">생성</button>
                </div>
            </div>
        </figure>
    `;
    return addTrackTemplate;
};

const trackUser = () => {
    const addTrackTemplate = /*html */ `
    <figure class="track-add" id="track-join">
        <div class="track-front">
            <i class="fa-solid fa-person-circle-plus"></i>
            <figcaption class="track-name">트랙 참가하기</figcaption>
        </div>
        <div class="track-back">
            <p class="track-body">참가할 트랙의 코드를 입력해주세요</p>
            <div id="track-code">
                <input class="track-index-input" type="text" placeholder="ID" />
                <input class="track-input" type="text" placeholder="초대 코드" />
            </div>
            <div class="track-back-button">
                <button class="track-button" id="track-join-cancel">취소</button>
                <button class="track-button" id="track-join-confirm" disabled="true">참가</button>
            </div>
        </div>
    </figure>
    `;
    return addTrackTemplate;
};

export { trackUser, trackManager };
