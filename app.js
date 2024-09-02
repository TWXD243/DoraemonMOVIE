// app.js

function toggleLights() {
    const lightOverlay = document.getElementById("lightOverlay");
    const controls = document.querySelector(".controls");

    if (lightOverlay.style.display === "none" || lightOverlay.style.display === "") {
        lightOverlay.style.display = "block";
        controls.style.display = "none"; // Ẩn các nút điều khiển
    } else {
        restoreLights();
    }
}

function restoreLights() {
    const lightOverlay = document.getElementById("lightOverlay");
    const controls = document.querySelector(".controls");

    lightOverlay.style.display = "none";
    controls.style.display = "flex"; // Hiện các nút điều khiển lại
}

function toggleFullScreen() {
    const videoPlayer = document.getElementById("videoPlayer");
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) { /* Firefox */
        videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) { /* IE/Edge */
        videoPlayer.msRequestFullscreen();
    }
}

function changeQuality(quality) {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = `movie_${quality}p.mp4`; // Đổi đường dẫn video theo chất lượng
    videoPlayer.play();
}

function goBack() {
    window.history.back(); // Quay lại trang trước đó
}

// Lưu tiến trình video
const videoPlayer = document.getElementById("videoPlayer");

// Khi video đang chơi
videoPlayer.addEventListener('timeupdate', () => {
    localStorage.setItem('videoCurrentTime', videoPlayer.currentTime);
});

// Khi tải lại trang, kiểm tra và đặt thời gian video
window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('videoCurrentTime');
    if (savedTime) {
        const continueWatching = confirm('Bạn có muốn tiếp tục xem từ vị trí đã dừng lại không? Nhấn OK để tiếp tục, Cancel để xem lại từ đầu.');
        if (continueWatching) {
            videoPlayer.currentTime = parseFloat(savedTime);
        } else {
            videoPlayer.currentTime = 0; // Xem lại từ đầu
        }
    }
});

// Khi tắt trang, xóa dữ liệu lưu trữ
window.addEventListener('beforeunload', () => {
    localStorage.removeItem('videoCurrentTime');
});

