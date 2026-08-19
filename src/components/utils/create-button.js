function createButton({ text, className, onClick, disabled = false }) {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = className;
  button.disabled = disabled;
  if (onClick) button.addEventListener("click", onClick);

  return button;
}

function createLinkButton({ text, className, href, newTab = true }) {
  return createButton({
    text,
    className,
    onClick: () => {
      if (newTab) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = href;
      }
    },
  });
}

export { createButton, createLinkButton };
