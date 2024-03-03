const nav = document.querySelector(".nav");
const button = document.querySelector(".btn-mobile-nav");

button.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});
