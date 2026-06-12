// Tunggu sampai halaman selesai dimuat
window.addEventListener('load', () => {
    // Pilih elemen navbar
    const navbar = document.querySelector('.navbar');
  
    // Tambahkan kelas "visible" setelah delay (100ms)
    setTimeout(() => {
      navbar.classList.add('navbar-visible');
    }, 100); // Ubah waktu delay jika perlu
});


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
      document.querySelector(".hero").classList.add("show");
  }, 300); // Delay awal sebelum animasi dimulai
});

// Animasi
const hiddenElements = document.querySelectorAll('.home-content');
const hiddenElements2 = document.querySelectorAll('.home-content2');
const hiddenElements3 = document.querySelectorAll('.section-page');
const hiddenElements4 = document.querySelectorAll('.secdiv-1');
const hiddenElements5 = document.querySelectorAll('.secdiv-2');
const hiddenElements6 = document.querySelectorAll('.othersdiv');
const hiddenElements7 = document.querySelectorAll('.cardjoin-div');
const hiddenElements8 = document.querySelectorAll('.instruktur .card');

// Buat observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Tambahkan kelas 'visible' saat elemen terlihat
      entry.target.classList.add('visible');
      // Hapus observer agar tidak terpicu lagi
      observer.unobserve(entry.target);
    }
  });
});

// Pasang observer ke setiap elemen
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
hiddenElements3.forEach((el) => observer.observe(el));
hiddenElements4.forEach((el) => observer.observe(el));
hiddenElements5.forEach((el) => observer.observe(el));
hiddenElements6.forEach((el) => observer.observe(el));
hiddenElements7.forEach((el) => observer.observe(el));
hiddenElements8.forEach((el) => observer.observe(el));