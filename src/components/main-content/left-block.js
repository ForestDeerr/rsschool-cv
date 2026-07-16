import { createAboutSection } from "./about-section.js";

function createLeftBlock(lang) {
  const leftBlock = document.createElement("div");
  leftBlock.className = "left";

  leftBlock.append(createAboutSection(lang));

  return leftBlock;
}

export { createLeftBlock };
