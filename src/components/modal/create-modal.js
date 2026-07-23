import { createButton } from "../utils/create-button.js";
import { loadStyle } from "../utils/load-style.js";

loadStyle("./src/components/modal/styles.css");

function createModal({ title = "", content, closeOnOverlay = true }) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = "modal";

  const header = document.createElement("div");
  header.className = "modal-header";

  const titleElement = document.createElement("h2");
  titleElement.className = "modal-title";
  titleElement.textContent = title;

  const closeButton = createButton({
    className: "modal-close",
  });

  const body = document.createElement("div");
  body.className = "modal-body";

  if (content instanceof HTMLElement) {
    body.append(content);
  } else {
    body.innerHTML = content;
  }

  header.append(titleElement, closeButton);
  modal.append(header, body);
  overlay.append(modal);

  function close() {
    overlay.remove();
    document.body.classList.remove("modal-open");
  }

  closeButton.addEventListener("click", close);

  if (closeOnOverlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        close();
      }
    });
  }

  document.addEventListener(
    "keydown",
    function esc(event) {
      if (event.key === "Escape") {
        close();
        document.removeEventListener("keydown", esc);
      }
    },
    { once: true },
  );

  document.body.append(overlay);
  document.body.classList.add("modal-open");

  return {
    close,
    element: overlay,
  };
}

export { createModal };
