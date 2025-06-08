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