import { createLangBtn } from "./components/language-button/language-button.js";
import { titles } from "./language.js";

function startApp() {
  let currentLang = localStorage.getItem("lang");

  if (!currentLang) {
    localStorage.setItem("lang", "ru");
    currentLang = localStorage.getItem("lang");
  }

  document.body.replaceChildren();
  document.title = titles[currentLang];
  createLangBtn();
}

startApp();

export { startApp };
