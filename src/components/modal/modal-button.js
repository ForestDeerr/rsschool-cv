import { createButton } from "../utils/create-button.js";
import { createAboutContent } from "./create-about-content.js";
import { createModal } from "./create-modal.js";

const title = "About project";
const content = createAboutContent();

function createModalBtn() {
  const button = createButton({
    className: `lang-btn infoPng`,
    onClick: () => {
      createModal({
        title: `${title}`,
        content: createAboutContent(),
      });
    },
  });

  return button;
}

export { createModalBtn };
