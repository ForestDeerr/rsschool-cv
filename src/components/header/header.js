import { createLogo } from "./logo.js";
import { createNavigation } from "../main-content/navigation-panel.js";
import { burgerBtn } from "./burger-button.js";
import { burgerMobileMenu } from "./burger-menu.js";

function createHeader(lang) {
  const header = document.createElement("header");

  const burgerMenu = document.createElement("div");

  const burBtn = burgerBtn(burgerMenu);

  burgerMobileMenu(lang, burgerMenu, burBtn);

  const logoSection = document.createElement("div");
  logoSection.append(createLogo(lang));

  header.append(burgerMenu, createNavigation(lang, burBtn), logoSection);

  return header;
}

export { createHeader };
