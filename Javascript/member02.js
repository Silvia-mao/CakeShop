function registerSuccess() {
    alert('登入成功');
    window.location.href = '../index.html'; 
    // 將此處的 URL 替換為你想要跳轉的頁面
}

// 隱藏導覽列
let prevScrollPos = window.pageYOffset;
const toplogo = document.querySelector('.toplogo');

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        toplogo.style.top = '0';
    } else {
        toplogo.style.top = '-' + toplogo.offsetHeight + 'px'; // 將整個導覽列隱藏在視窗上方
    }

    prevScrollPos = currentScrollPos;
}