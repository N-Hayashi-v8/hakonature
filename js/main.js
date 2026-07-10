document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".l-header__lang-btn");

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      langButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
});
