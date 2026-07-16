import { createHeader } from "./components/header/header.js";
import { createFooter } from "./components/main-content/footer.js";
import { createMain } from "./components/main-content/main-content.js";
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

  document.body.append(
    createHeader(lang),
    createMain(lang),
    createFooter(lang),
  );
}

startApp();

export { startApp };
