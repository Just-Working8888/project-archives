var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: false,
  pagination: ".swiper-pagination",
  grabCursor: true,
  speed: 1300,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 1,

});

function smoothScroll(targetPosition, duration) {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function scrollStep(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const scrollAmount = easeInOutCubic(progress, startPosition, distance, duration);
    window.scrollTo(0, scrollAmount);
    if (progress < duration) requestAnimationFrame(scrollStep);
  }

  requestAnimationFrame(scrollStep);
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

mySwiper.on("reachEnd", function () {
  smoothScroll(window.scrollY + window.innerHeight, 1000); // Прокручиваем на 100vh с плавной анимацией за 1 секунду
});