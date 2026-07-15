import { createButton } from "../create-button.js";
import { loadStyle } from "../load-style.js";

function createLangBtn() {
  loadStyle("./src/components/language-button/styles.css");

  let currentLang = localStorage.getItem("lang");

  const button = createButton({
    className: `lang-btn ${currentLang}`,
    onClick: () => {
      currentLang = currentLang === "ru" ? "en" : "ru";

      localStorage.setItem("lang", currentLang);

      button.className = `lang-btn ${currentLang}`;
    },
  });

  document.body.append(button);
}

export { createLangBtn };
