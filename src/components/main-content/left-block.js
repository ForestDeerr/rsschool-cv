import { createNavigation } from "./navigation-panel.js";

function createLeftBlock(lang) {
  const leftBlock = document.createElement("div");
  leftBlock.className = "left";

  leftBlock.append(createNavigation(lang));

  return leftBlock;
}

export { createLeftBlock };
