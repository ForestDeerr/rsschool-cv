import { createLeftBlock } from "./left-block.js";

function createMain(lang) {
  const main = document.createElement("main");

  main.append(createLeftBlock(lang));

  return main;
}

export { createMain };
