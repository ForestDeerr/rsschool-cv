function addTooltip(element, title, text) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";

  const tooltipTitle = document.createElement("div");
  tooltipTitle.className = "tooltip-title";
  tooltipTitle.textContent = title;

  const tooltipContent = document.createElement("div");
  tooltipContent.className = "";
  tooltipContent.textContent = text;

  tooltip.append(tooltipTitle, tooltipContent);

  element.append(tooltip);

  element.addEventListener("mousemove", (event) => {
    tooltip.style.left = `${event.clientX - tooltip.offsetWidth - 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;
  });
}

export { addTooltip };
