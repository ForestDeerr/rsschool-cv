import { createSlider } from "../slider/create-slider.js";
import { createLanguage } from "./language-section.js";
import { createProSkills } from "./pro-skills-section.js";

function createRightBlock(lang) {
  const rightBlock = document.createElement("div");
  rightBlock.className = "right";

  rightBlock.append(
    createProSkills(lang),
    createLanguage(lang),
    createSlider(lang),
  );

  return rightBlock;
}

export { createRightBlock };
