import { createLeftBlock } from "./left-block.js";
import { createRightBlock } from "./right-block.js";

function createMain(lang) {
  const main = document.createElement("main");

  main.append(createLeftBlock(lang), createRightBlock(lang));

  return main;
}

export { createMain };
