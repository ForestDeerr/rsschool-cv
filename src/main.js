import { createButton } from "./components/create-button.js";

document.body.replaceChildren();

document.body.appendChild(
  createButton({
    text: "Lang",
    className: "btn",
    //   onClick: () => {
    //   },
  }),
);
