const bars = document.getElementById("bars");
const burgerMenu = document.querySelector(".burger-menu");
const mainSection = document.querySelector(".main-section");
const arrow = document.getElementById("arrow");
const nav = document.querySelector(".header-parent");
const headerInput = document.querySelector(".header-input");
const header = document.querySelector(".header-parent");
const blackLogo = document.getElementById("blackLogo");
const whitelogo = document.getElementById("logo");

bars.addEventListener("click", function () {
  burgerMenu.style.display = "block";
  burgerMenu.style.animation = "burgermenu 1s forwards ease-in-out";
});

arrow.addEventListener("click", function () {
  burgerMenu.style.animation = "burgermenureverse 1s forwards ease-in-out";
});

window.onscroll = () => {
  if (window.scrollY > 1) {
    nav.style.background = "white";
    nav.style.borderBottom = "2px solid gray";
    headerInput.style.display = "block";
    whitelogo.style.display = "none";
    blackLogo.style.display = "block";
  } else {
    nav.style.background = "transparent";
    headerInput.style.display = "none";
    nav.style.borderBottom = "none";
    whitelogo.style.display = "block";
    blackLogo.style.display = "none";
  }
};
