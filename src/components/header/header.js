import { createLangBtn } from "../language-button/language-button.js";
import { createNavigation } from "../main-content/navigation-panel.js";
import { createModalBtn } from "../modal/modal-button.js";
import { createThemBtn } from "../thema-button/thema-button.js";

function createHeader(lang) {
  const header = document.createElement("header");

  const setting = document.createElement("div");

  setting.className = "setting";
  setting.append(createLangBtn(), createThemBtn(), createModalBtn());

  header.append(createNavigation(lang), setting);

  return header;
}

export { createHeader };
