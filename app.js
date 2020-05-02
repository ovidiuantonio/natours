const button = document.querySelector(".navigation__button");
const body = document.querySelector("body");
const links = document.querySelectorAll(".navigation__link");

button.addEventListener("click", () => {
  body.classList.toggle("hide-scrollbar");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    button.click();
  });
});
