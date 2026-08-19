import { startApp } from "../../main.js";
import { createButton } from "../utils/create-button.js";
import { loadStyle } from "../utils/load-style.js";

function getNextLang(lang) {
  return lang === "ru" ? "en" : "ru";
}

function createLangBtn() {
  loadStyle("./src/components/language-button/styles.css");

  let currentLang = localStorage.getItem("lang");

  const button = createButton({
    className: `lang-btn ${getNextLang(currentLang)}`,
    onClick: () => {
      currentLang = currentLang === "ru" ? "en" : "ru";

      localStorage.setItem("lang", currentLang);

      button.className = `lang-btn ${getNextLang(currentLang)}`;

      startApp();
    },
  });

  return button;
}

export { createLangBtn };
