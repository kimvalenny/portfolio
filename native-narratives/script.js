// --- NAVIGATION BAR --- //

const desktopNav = document.getElementById('nav');

const onScroll = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 100) {
        desktopNav.classList.add("sticky-nav");
    } else {
        desktopNav.classList.remove("sticky-nav");
    }
}
window.addEventListener('scroll', onScroll);

let prevScroll = window.pageYOffset;
window.onscroll = function() {
    let currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {
        desktopNav.style.top = "0";
    } else {
        desktopNav.style.top = "-100px";
    }
    prevScroll = currentScroll;
}