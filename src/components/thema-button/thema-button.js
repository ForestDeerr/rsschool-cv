import { createButton } from "../utils/create-button.js";
import { loadStyle } from "../utils/load-style.js";

function getNextThem(lang) {
  return lang === "dark" ? "light" : "dark";
}

function createThemBtn() {
  loadStyle("./src/components/language-button/styles.css");

  let currentThem = localStorage.getItem("them");

  const button = createButton({
    className: `lang-btn ${getNextThem(currentThem)}`,
    onClick: () => {
      currentThem = currentThem === "dark" ? "light" : "dark";

      localStorage.setItem("them", currentThem);

      button.className = `lang-btn ${getNextThem(currentThem)}`;
      document.documentElement.dataset.theme = currentThem;
    },
  });

  return button;
}

export { createThemBtn };
