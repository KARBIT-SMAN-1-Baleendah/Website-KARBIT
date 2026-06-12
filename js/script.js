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

// CTA Hero
// Tangkap elemen link
const ctaLink = document.querySelector('.cta .btn-primary');

// Tambahkan event listener
ctaLink.addEventListener('click', (event) => {
    event.preventDefault(); // Cegah link default
    const targetSection = document.querySelector('#home22');
    
    // Scroll ke target dengan jarak offset
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

// carousel
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatically change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
