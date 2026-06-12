document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".navbar .navbar-nav a");
    let currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// if hamburger menu clicked, then
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};
// Close sidebar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});  

// Slider Otomatis dan Manual
const activities = document.querySelectorAll('.activity');

activities.forEach((activity) => {
    let list = activity.querySelector('.slider .list');
    let items = activity.querySelectorAll('.slider .list .item');
    let dots = activity.querySelectorAll('.slider .dots li');
    let prev = activity.querySelector('#prev');
    let next = activity.querySelector('#next');

    let active = 0;
    let lengthItems = items.length - 1;

    next.onclick = function () {
        if (active + 1 > lengthItems) {
            active = 0;
        } else {
            active += 1;
        }
        reloadSlider();
    };

    prev.onclick = function () {
        if (active - 1 < 0) {
            active = lengthItems;
        } else {
            active -= 1;
        }
        reloadSlider();
    };

    let refreshSlider = setInterval(() => {
        next.click();
    }, 5000);

    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        let lastActiveDot = activity.querySelector('.slider .dots li.active');
        lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');

        clearInterval(refreshSlider);
        refreshSlider = setInterval(() => {
            next.click();
        }, 5000);
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', function () {
            active = key;
            reloadSlider();
        });
    });

    reloadSlider();
});
