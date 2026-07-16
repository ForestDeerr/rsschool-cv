import { createAboutSection } from "./about-section.js";
import { createCodeExample } from "./code-example-section.js";
import { createCourses } from "./courses-section.js";
import { createEducation } from "./education-section.js";
import { createLanguage } from "./language-section.js";

function createLeftBlock(lang) {
  const leftBlock = document.createElement("div");
  leftBlock.className = "left";

  leftBlock.append(
    createAboutSection(lang),
    createCodeExample(lang),
    createCourses(lang),
    createEducation(lang),
    createLanguage(lang),
  );

  return leftBlock;
}

export { createLeftBlock };
