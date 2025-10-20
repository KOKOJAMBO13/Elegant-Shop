// Анимация плавного появления страницы магазина
window.addEventListener("load", () => {
  const fade = document.getElementById("fade");
  setTimeout(() => {
    fade.style.opacity = "0";
    fade.style.pointerEvents = "none";
  }, 100);
});
