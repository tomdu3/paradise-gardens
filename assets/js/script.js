document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
  
    const slidesPerView = 2; // Show 2 slides at a time
    let currentIndex = 0;
  
    function updateCarouselPosition() {
      const slideWidth = slides[0].clientWidth;
      carousel.style.transform = `translateX(-${currentIndex * slideWidth * slidesPerView}px)`;
    }
  
    nextBtn.addEventListener('click', () => {
      const maxIndex = Math.ceil(slides.length / slidesPerView) - 1;
      if (currentIndex < maxIndex) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the start
      }
      updateCarouselPosition();
    });
  
    prevBtn.addEventListener('click', () => {
      const maxIndex = Math.ceil(slides.length / slidesPerView) - 1;
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = maxIndex; // Go to the end
      }
      updateCarouselPosition();
    });
  });
  