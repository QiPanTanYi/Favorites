//打开新窗口
document.addEventListener('DOMContentLoaded', function() {
    const newTabCheckbox = document.getElementById('newTabCheckbox');

    newTabCheckbox.addEventListener('change', function() {
        const links = document.querySelectorAll('a'); // 每次变更时重新获取链接列表
        links.forEach(link => {
            if (newTabCheckbox.checked) {
                link.setAttribute('target', '_blank'); // 新窗口打开
            } else {
                link.removeAttribute('target'); // 当前窗口打开
            }
        });
    });
});
// 回到顶部按钮功能
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
