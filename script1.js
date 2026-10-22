// Bắn pháo hoa khi vừa tải trang
window.addEventListener('DOMContentLoaded', () => {
    fireConfetti();
});

// Hàm tạo hiệu ứng pháo sinh nhật bay lộng lẫy
function fireConfetti() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
        colors: ['#d4af37', '#ffffff']
    });
    fire(0.2, {
        spread: 60,
        colors: ['#fcf6ba', '#aa771c']
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        colors: ['#ffffff', '#d4af37']
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

// Bật / Tắt Nhạc
var music = document.getElementById("bg-music");
var isPlaying = false;

function toggleMusic() {
    var btn = document.getElementById("music-btn");
    if (isPlaying) {
        music.pause();
        btn.innerHTML = "🎵 Bật Nhạc";
    } else {
        music.play();
        btn.innerHTML = "⏸️ Tắt Nhạc";
        fireConfetti(); // Bắn thêm pháo khi bấm nút
    }
    isPlaying = !isPlaying;
}