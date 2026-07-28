import { createSlider } from "../slider/create-slider.js";
import { createContacts } from "./contact-section.js";
import { createProSkills } from "./pro-skills-section.js";

function createRightBlock(lang) {
  const rightBlock = document.createElement("div");
  rightBlock.className = "right";

  rightBlock.append(
    createContacts(lang),
    createProSkills(lang),
    createSlider(),
  );

  return rightBlock;
}

export { createRightBlock };
