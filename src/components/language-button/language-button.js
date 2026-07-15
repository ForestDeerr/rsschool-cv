import { createButton } from "../create-button.js";
import { loadStyle } from "../load-style.js";

function createLangBtn() {
  loadStyle("./src/components/language-button/styles.css");

  let currentLang = "ru";

  const button = createButton({
    className: "lang-btn ru",
    onClick: () => {
      currentLang = currentLang === "ru" ? "en" : "ru";

      button.classList.toggle("ru");
      button.classList.toggle("en");
    },
  });

  document.body.append(button);
}

export { createLangBtn };
