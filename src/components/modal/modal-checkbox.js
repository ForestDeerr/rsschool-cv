function createModalCheckbox(lang) {
  const container = document.createElement("div");
  container.className = "modal-checkbox";

  const label = document.createElement("label");
  label.className = "pixel-checkbox";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "dont-show-modal";
  input.checked = localStorage.getItem("hideWelcomeModal") === "true";

  const checkmark = document.createElement("span");
  checkmark.className = "checkmark";

  const textElement = document.createElement("span");
  textElement.className = "checkbox-text";
  textElement.textContent = lang.modalContent.checkbox;

  label.append(input, checkmark);
  container.append(label, textElement);

  input.addEventListener("change", () => {
    localStorage.setItem("hideWelcomeModal", input.checked);
  });

  return container;
}

export { createModalCheckbox };
