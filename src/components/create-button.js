function createButton({ text, className, onClick, disabled = false }) {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = className;
  button.disabled = disabled;
  if (onClick) button.addEventListener("click", onClick);

  return button;
}

export { createButton };
