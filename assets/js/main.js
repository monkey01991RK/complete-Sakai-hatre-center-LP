  const menuBtn = document.querySelector('.menuBtn');
  const modal = document.querySelector('.menuModal');
  const modalWrapper = document.querySelector('.modalText');
  const closeBtn = document.querySelector('.menuModal_btn');

  // Open modal
  menuBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalWrapper.style.pointerEvents = 'auto';
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal-open');
    modal.classList.add('modal-close');

    // Wait for animation to finish, then hide modal
    modal.addEventListener('animationend', function handleClose() {
      modal.style.display = 'none';
      modalWrapper.style.pointerEvents = 'none';
      modal.removeEventListener('animationend', handleClose);
    });
  });

  // sliders
  let currentSlide = 0;
  const slides = document.querySelectorAll(".simple-slider .slide");
  
  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    slides[currentSlide].classList.add("active");
  
    setInterval(() => {
      showSlide(1);
    }, 5000); // Change every 5 seconds for a relaxed pace
  });
  

  new Swiper('.photo', {
    loop: true,
    autoplay: { delay: 8000 },
    effect: 'fade',
  });

  new Swiper('.photo2', {
    loop: true,
    autoplay: { delay: 3500 },
    effect: 'slide',
  });

  new Swiper('.photo3', {
    loop: true,
    autoplay: { delay: 10000 },
    effect: 'slide',
  });

  

