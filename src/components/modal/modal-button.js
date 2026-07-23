import { createButton } from "../utils/create-button.js";
import { createAboutContent } from "./create-about-content.js";
import { createModal } from "./create-modal.js";

function createModalBtn(lang) {
  const button = createButton({
    className: `lang-btn infoPng`,
    onClick: () => {
      createModal({
        title: lang.modalContent.title,
        content: lang.modalContent.content,
      });
    },
  });

  return button;
}

export { createModalBtn };
