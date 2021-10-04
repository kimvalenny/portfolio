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


// --- MOBILE NAVIGATION --- //

function mobileNav() {
    window.onscroll = function() {
        let currentScroll = window.pageYOffset;
        if (prevScroll > currentScroll) {
            desktopNav.style.top = "0";
        } else {
            desktopNav.style.top = "0";
        }
        prevScroll = currentScroll;
    }
    
    var nav = document.getElementById("nav-items");
    if (nav.style.display === "block") {
      nav.style.display = "none";
      document.body.style.overflowY = '';
    } else {
      nav.style.display = "block";
      document.body.style.overflowY = 'hidden';
    }
}

