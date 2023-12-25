function toggleNavbar() {
    var navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.style.display = (navbarLinks.style.display === "flex") ? "none" : "flex";
  }
  function toggleNavbar2() {
    var navbarLinks = document.getElementById("navbarLinks2");
    navbarLinks.style.display = (navbarLinks.style.display === "flex") ? "none" : "flex";
  }
  

  let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.pagination-dot');

  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide) => (slide.style.display = 'none'));
  dots.forEach((dot) => (dot.className = 'pagination-dot'));

  slides[currentIndex].style.display = 'block';
  dots[currentIndex].className = 'pagination-dot active';
}

function changeSlide(n) {
  showSlide(currentIndex + n);
}

function currentSlide(n) {
  showSlide(n - 1);
}

// İlk slaytı göster
showSlide(currentIndex);
