let nav = document.querySelector('nav');
let navLink = document.querySelector('nav ul li a');

// 頁面捲動時
// 監聽畫面 => 也可以是監聽其他元素
window.addEventListener('scroll', () => {
    // console.log(window);
    if (window.pageYOffset != 0) {
        nav.style.backgroundColor = "rgba(0,0,0,.7)"
        navLink.forEach(a => {
            a.style.color = "#fff";
        });
    } else {
        nav.style.backgroundColor = "#ccc)"
        navLink.forEach(a => {
            a.style.color = "#333";
        });
    }
})