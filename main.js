const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.6 + "px";
  console.log(parallax);
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  let hideAK = document.querySelector("article");
  hideAK.classList.toggle("hiddenLogo", window.scrollY > 0);
});
window.addEventListener("scroll", function () {
  let hideAK = document.getElementById("navSleep");
  hideAK.classList.toggle("hiddenLogo", window.scrollY > 0);
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

//open the hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  console.log("mobilemenu");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

//close hamburger menu on click
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  console.log("click worked");
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
