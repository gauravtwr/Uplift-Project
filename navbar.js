const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const header=document.querySelector(".header");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  header.classList.toggle("hide");
 
});