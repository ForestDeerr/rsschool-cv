import { createHeader } from "./components/header/header.js";
import { createFooter } from "./components/main-content/footer.js";
import { createMain } from "./components/main-content/main-content.js";
import { createModal } from "./components/modal/create-modal.js";
import { langEn } from "./language-en.js";
import { langRu } from "./language-ru.js";

function startApp() {
  let currentLang = localStorage.getItem("lang");
  let currentThem = localStorage.getItem("them");
  let hideWelcomeModal = localStorage.getItem("hideWelcomeModal");

  if (!currentLang) {
    currentLang = "ru";
    localStorage.setItem("lang", currentLang);
  }

  if (!currentThem) {
    currentThem = "dark";
    localStorage.setItem("them", currentThem);
    document.documentElement.dataset.theme = currentThem;
  } else {
    document.documentElement.dataset.theme = currentThem;
  }

  let lang = currentLang === "ru" ? langRu : langEn;

  document.body.replaceChildren();
  document.title = lang.pageTitle;

  document.body.append(
    createHeader(lang),
    createMain(lang),
    createFooter(lang),
  );

  if (hideWelcomeModal !== "true") {
    createModal(
      {
        title: lang.modalContent.title,
        content: lang.modalContent.content,
      },
      lang,
    );
  }
}

startApp();

export { startApp };
