function setMainEvent() {
    getUserLocation();
}

const getUserLocation = () => {
    if (navigator.geolocation) {
        //위치 정보를 정기적으로 얻기
        var id = navigator.geolocation.watchPosition(function (pos) {
            var latitude = pos.coords.latitude;
            var longitude = pos.coords.longitude;
        });
        // 버튼 클릭으로 감시를 중지
        // $('#btnStop').click(function () {
        //     navigator.geolocation.clearWatch(id);
        // });
    } else {
        alert('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
    }
};
export default setMainEvent;
