// Анимация перехода на страницу магазина
document.getElementById("getStartedBtn").addEventListener("click", () => {
  const fade = document.getElementById("fade");
  fade.style.pointerEvents = "all";
  fade.style.opacity = "1";

  setTimeout(() => {
    window.location.href = "shop.html";
  }, 800); // 0.8 секунды затемнение перед переходом
});
