const pageBox = document.querySelector(".site-box");
const navMenu = document.querySelector(".header__menu-drawer");
console.dir(navMenu.open);
if (navMenu) {
  navMenu.addEventListener("click", () => {
    pageBox.classList.toggle("openMenu");
    document.body.classList.toggle("fixed");
  });
}
