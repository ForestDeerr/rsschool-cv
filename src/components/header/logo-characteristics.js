function logoCharacteristics(lang) {
  const container = document.createElement("div");
  container.className = "logo-characteristics";

  lang.characteristicsContent.forEach((characteristic) => {
    const characteristicItem = document.createElement("div");
    characteristicItem.className = "characteristic-item";

    const image = document.createElement("img");
    image.className = "characteristic-image";
    image.src = characteristic.img;
    image.alt = characteristic.title;

    const value = document.createElement("span");
    value.className = "characteristic-value";
    value.textContent = characteristic.count;

    addTooltip(
      characteristicItem,
      characteristic.title,
      characteristic.description,
    );

    characteristicItem.append(image, value);
    container.append(characteristicItem);
  });

  return container;
}

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

export { logoCharacteristics };
