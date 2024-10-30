const headerEl = document.querySelector(".header");
const navbarEl = document.querySelector('.header .navbar');
const menuIcon = document.querySelector('#menu-icon')

window.addEventListener("scroll", () => {
  window.scrollY > 0 ? headerEl.classList.add("scrolled") : headerEl.classList.remove("scrolled");
});

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('fa-times');
    navbarEl.classList.toggle('active');
});
