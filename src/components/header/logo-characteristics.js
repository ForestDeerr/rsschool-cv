import { addTooltip } from "../utils/add-tooltip.js";

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

export { logoCharacteristics };
