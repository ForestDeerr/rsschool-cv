import { createAboutSection } from "./about-section.js";
import { createCodeExample } from "./code-example-section.js";
import { createCourses } from "./courses-section.js";

function createLeftBlock(lang) {
  const leftBlock = document.createElement("div");
  leftBlock.className = "left";

  leftBlock.append(
    createAboutSection(lang),
    createCodeExample(lang),
    createCourses(lang),
  );

  return leftBlock;
}

export { createLeftBlock };
