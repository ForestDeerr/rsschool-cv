import { createButton } from "../utils/create-button.js";

import { loadStyle } from "../utils/load-style.js";

loadStyle("./src/components/header/styles.css");

let isOpen = false;

function burgerBtn() {
  const burgerMenu = document.createElement("button");
  burgerMenu.className = "burger-menu";
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
    } else {
      burgerMenu.classList.remove("active-burger");
      burgerMenu.classList.add("closing");
    }
    isOpen = !isOpen;
  });

  return burgerMenu;
}

export { burgerBtn };
