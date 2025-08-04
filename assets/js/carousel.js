const carousels = document.querySelectorAll(".carousel-wrapper");

carousels.forEach(wrapper => {
  const carousel = wrapper.querySelector(".main__section-carousel");
  const btnLeft = wrapper.querySelector(".carousel-btn--left");
  const btnRight = wrapper.querySelector(".carousel-btn--right");

  const getScrollAmount = () => {
    // Puedes ajustar el factor multiplicador si quieres más o menos avance
    return Math.floor(carousel.offsetWidth * 0.8); // 80% del ancho visible
  };

  btnLeft.addEventListener("click", () => {
    carousel.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    carousel.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });

  // (Opcional) actualiza el scrollAmount si redimensionan la ventana
  window.addEventListener("resize", () => {
    // no hace falta hacer nada porque se recalcula cada vez
  });
});
