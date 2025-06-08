document.addEventListener('DOMContentLoaded', function() {
    
    // 平滑滚动效果
    const links = document.querySelectorAll('nav a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的跳转行为

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 减去导航栏的高度，使其定位准确
                    behavior: 'smooth'
                });
            }
        });
    });

    // 为项目卡片添加悬停效果（用JS实现一个额外的效果示例）
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // 你可以在这里添加更复杂的交互
        });
        card.addEventListener('mouseleave', () => {
            // 鼠标离开时的效果
        });
    });

    console.log("个人网站脚本加载完毕！");
});
// --- 自定义音乐播放器逻辑 ---
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('music-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';
    const progressContainer = document.querySelector('.progress-container');
    const progressBar = document.getElementById('progress-bar');

    // 播放/暂停功能
    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = pauseIcon;
        } else {
            audio.pause();
            playPauseBtn.innerHTML = playIcon;
        }
    }

    // 更新进度条
    function updateProgress() {
        const { duration, currentTime } = audio;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
    
    // 设置播放进度
    function setProgress(e) {
        const width = this.clientWidth; // 进度条容器的总宽度
        const clickX = e.offsetX; // 点击位置的X坐标
        const duration = audio.duration;
        
        audio.currentTime = (clickX / width) * duration;
    }

    // 事件监听
    if (audio && playPauseBtn) {
        playPauseBtn.addEventListener('click', togglePlayPause);
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', () => { // 播放结束后恢复播放按钮
            playPauseBtn.innerHTML = playIcon;
            progressBar.style.width = '0%';
        });
        progressContainer.addEventListener('click', setProgress);
    }
});
