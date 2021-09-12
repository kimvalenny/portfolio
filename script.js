// --- PARTICLES --- //

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


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


// --- PROJECT MODAL OVERLAYS --- //

let scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';

function openOverlay(project) {
  if (project == 'projectTechPanel') {
    document.getElementById("project-tech-panel").style.display = "block";
  } else if (project == 'projectCCS') {
    document.getElementById("project-ccs").style.display = "block";
  } else if (project == 'projectDXB212') {
    document.getElementById("project-dxb212").style.display = "block";
  }

  document.body.style.overflowY = 'hidden';
  document.body.style.marginRight = scrollbarWidth;
}

function closeOverlay() {
  document.getElementById("project-tech-panel").style.display = "none";
  document.getElementById("project-ccs").style.display = "none";
  document.getElementById("project-dxb212").style.display = "none";
  
  document.body.style.overflowY = '';
  document.body.style.marginRight = '0px';

  var videoList = document.getElementsByTagName("video");
  for (var i = 0; i < videoList.length; i++) {
    videoList[i].muted = true;
    videoList[i].load();
  }
}


// --- PROJECT MODAL SLIDESHOW --- //

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "active";
}

