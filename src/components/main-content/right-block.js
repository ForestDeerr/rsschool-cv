import { createContacts } from "./contact-section.js";

function createRightBlock(lang) {
  const rightBlock = document.createElement("div");
  rightBlock.className = "right";

  rightBlock.append(createContacts(lang));

  return rightBlock;
}

export { createRightBlock };
