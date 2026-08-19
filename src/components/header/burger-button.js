import { createButton } from "../utils/create-button.js";
import { loadStyle } from "../utils/load-style.js";

loadStyle("./src/components/header/styles.css");

let isOpen = false;

function burgerBtn(mobileMenu) {
  const burgerBtn = document.createElement("button");
  burgerBtn.replaceChildren();
  burgerBtn.className = "burger-btn";
  burgerBtn.type = "button";

  for (let i = 0; i < 3; i++) {
    const line = document.createElement("span");
    line.className = "burger-line";
    burgerBtn.append(line);
  }
  burgerBtn.addEventListener("click", () => {
    toggleBurgerMenu(burgerBtn, mobileMenu);
  });

  return burgerBtn;
}

function toggleBurgerMenu(btn, mobileMenu) {
  if (!isOpen) {
    btn.classList.remove("closing");
    btn.classList.add("active-burger");
    mobileMenu.classList.add("active-menu");
    document.body.classList.add("modal-open");
  } else {
    btn.classList.remove("active-burger");
    btn.classList.add("closing");
    mobileMenu.classList.remove("active-menu");
    document.body.classList.remove("modal-open");
  }
  isOpen = !isOpen;
}

export { burgerBtn, toggleBurgerMenu };
