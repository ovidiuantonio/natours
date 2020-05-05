const button = document.querySelector(".navigation__button");
const body = document.querySelector("body");
const links = document.querySelectorAll(".navigation__link");
const popup = document.querySelector(".popup");
const buttonsBook = document.querySelectorAll(".card__cta .btn");
const closePopup = document.querySelector(".popup__close");

button.addEventListener("click", () => {
  body.classList.toggle("hide-scrollbar");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    button.click();
  });
});

closePopup.addEventListener("click", () => {
  body.classList.toggle("hide-scrollbar");
});

buttonsBook.forEach((button) => {
  button.addEventListener("click", () => {
    body.classList.toggle("hide-scrollbar");
  });
});

popup.addEventListener("click", (e) => {
  const location = e.target;
  if (location.classList.contains("popup")) {
    closePopup.click();
    body.classList.toggle("hide-scrollbar");
    body.classList.toggle("hide-scrollbar");
  }
});
