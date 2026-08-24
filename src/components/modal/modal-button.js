import { createButton } from "../utils/create-button.js";
import { createAboutContent } from "./create-about-content.js";
import { createModal } from "./create-modal.js";

function createModalBtn(lang) {
  const button = document.createElement("button");
  button.className = "info-btn";

  const text = document.createElement("div");
  text.className = "info-btn-text";
  text.textContent = "i";

  button.append(text);

  button.addEventListener("click", () => {
    createModal(
      {
        title: lang.modalContent.title,
        content: lang.modalContent.content,
      },
      lang,
    );
  });

  return button;
}

export { createModalBtn };
