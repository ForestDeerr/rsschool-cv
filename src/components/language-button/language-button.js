import { startApp } from "../../main.js";
import { createButton } from "../utils/create-button.js";
import { loadStyle } from "../utils/load-style.js";

function createLangBtn() {
  loadStyle("./src/components/language-button/language-button.css");

  let currentLang = localStorage.getItem("lang") || "ru";

  const langueBtn = document.createElement("button");
  langueBtn.className = "lang-btn";

  const front = document.createElement("span");
  front.className = "lang-btn-front";
  front.textContent = currentLang.toUpperCase();

  const back = document.createElement("span");
  back.className = "lang-btn-back";
  back.textContent = currentLang === "ru" ? "EN" : "RU";

  langueBtn.append(front, back);

  langueBtn.addEventListener("click", () => {
    currentLang = currentLang === "ru" ? "en" : "ru";

    localStorage.setItem("lang", currentLang);

    startApp();
  });
  return langueBtn;
}

export { createLangBtn };
