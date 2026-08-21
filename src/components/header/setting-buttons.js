import { createLangBtn } from "../language-button/language-button.js";
import { createModalBtn } from "../modal/modal-button.js";
import { createThemBtn } from "../thema-button/thema-button.js";

function createSettingButtons(lang) {
  const setting = document.createElement("div");
  setting.className = "setting";
  setting.append(createLangBtn(), createThemBtn(), createModalBtn(lang));

  return setting;
}

export { createSettingButtons };
