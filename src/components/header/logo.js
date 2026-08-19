import { createContacts } from "../main-content/contact-section.js";
import { logoCharacteristics } from "./logo-characteristics.js";

function createLogo(lang) {
  const logoSection = document.createElement("div");

  const logo = document.createElement("div");
  logo.className = "logo";

  const logoImg = document.createElement("div");
  logoImg.className = "logo-img";

  const img = document.createElement("img");
  img.className = "footer-img";
  img.src = "logo.png";
  img.alt = "Моё фото";

  const logoTitle = document.createElement("div");
  logoTitle.className = "logo-title";

  const h1 = document.createElement("h1");
  h1.className = "rgb";
  h1.textContent = lang.headerName;

  const h2 = document.createElement("h2");
  h2.className = "rgb";
  h2.textContent = lang.headerPosition;

  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";

  logoImg.append(img);
  logoTitle.append(h1, h2, createContacts(lang));

  logoContainer.append(logoTitle, logoCharacteristics(lang));
  logo.append(logoContainer, logoImg);
  logoSection.append(logo);

  return logoSection;
}

export { createLogo };
