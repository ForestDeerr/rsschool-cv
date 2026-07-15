import { createLangBtn } from "./components/language-button/language-button.js";

function startApp() {
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "ru");
  }

  document.body.replaceChildren();
  createLangBtn();
}

startApp();
