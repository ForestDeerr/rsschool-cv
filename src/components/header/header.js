import { createLangBtn } from "../language-button/language-button.js";
import { createNavigation } from "../main-content/navigation-panel.js";
import { createModalBtn } from "../modal/modal-button.js";
import { createThemBtn } from "../thema-button/thema-button.js";
import { burgerBtn } from "./burger-button.js";
import { burgerMobileMenu } from "./burger-menu.js";

function createHeader(lang) {
  const header = document.createElement("header");
  const setting = document.createElement("div");
  const burgerMenu = document.createElement("div");

  const burBtn = burgerBtn(burgerMenu);
  burgerMobileMenu(lang, burgerMenu, burBtn);

  setting.className = "setting";
  setting.append(createLangBtn(), createThemBtn(), createModalBtn(lang));

  header.append(burgerMenu, setting, createNavigation(lang, burBtn));

  return header;
}

export { createHeader };
