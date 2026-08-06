import { createButton } from "../utils/create-button.js";

import { loadStyle } from "../utils/load-style.js";
import { burgerMobileMenu } from "./burger-menu.js";

loadStyle("./src/components/header/styles.css");

let isOpen = false;

function burgerBtn(mobileMenu) {
  const burgerMenu = document.createElement("button");
  burgerMenu.className = "burger-btn";
  burgerMenu.type = "button";

  for (let i = 0; i < 3; i++) {
    const line = document.createElement("span");
    line.className = "burger-line";
    burgerMenu.append(line);
  }

  burgerMenu.addEventListener("click", () => {
    if (!isOpen) {
      burgerMenu.classList.remove("closing");
      burgerMenu.classList.add("active-burger");
      mobileMenu.classList.add("active-menu");
    } else {
      burgerMenu.classList.remove("active-burger");
      burgerMenu.classList.add("closing");
      mobileMenu.classList.remove("active-menu");
    }
    isOpen = !isOpen;
  });
  return burgerMenu;
}

export { burgerBtn };
