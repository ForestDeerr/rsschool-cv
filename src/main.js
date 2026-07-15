import { createHeader } from "./components/header/header.js";
import { createLangBtn } from "./components/language-button/language-button.js";
import { langEn } from "./language-en.js";
import { langRu } from "./language-ru.js";

function startApp() {
  let currentLang = localStorage.getItem("lang");

  if (!currentLang) {
    currentLang = "ru";
    localStorage.setItem("lang", currentLang);
  }

  let lang = currentLang === "ru" ? langRu : langEn;

  document.body.replaceChildren();
  document.title = lang.pageTitle;

  document.body.appendChild(createHeader(lang));

  createLangBtn();
}

startApp();

export { startApp };
