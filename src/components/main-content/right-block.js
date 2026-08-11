import { createSlider } from "../slider/create-slider.js";
import { createProSkills } from "./pro-skills-section.js";

function createRightBlock(lang) {
  const rightBlock = document.createElement("div");
  rightBlock.className = "right";

  rightBlock.append(createProSkills(lang), createSlider(lang));

  return rightBlock;
}

export { createRightBlock };
