import { createLangBtn } from "../language-button/language-button.js";
import { createNavigation } from "../main-content/navigation-panel.js";

function createHeader(lang) {
  const header = document.createElement("header");

  const logo = document.createElement("div");
  logo.className = "logo";

  const logoImg = document.createElement("div");
  logoImg.className = "logo-img";

  const img = document.createElement("img");
  img.className = "footer-img";
  img.src = "elk.png";
  img.alt = "Моё фото";
  img.width = 200;
  img.height = 200;

  const logoTitle = document.createElement("div");
  logoTitle.className = "logo-title";

  const h1 = document.createElement("h1");
  h1.className = "rgb";
  h1.textContent = lang.headerName;

  const h2 = document.createElement("h2");
  h2.className = "rgb";
  h2.textContent = lang.headerPosition;

  const setting = document.createElement("div");
  setting.className = "setting";
  setting.append(createLangBtn());

  logoImg.append(img);
  logoTitle.append(h1, h2);
  logo.append(logoImg, logoTitle, setting);
  header.append(createNavigation(lang), logo);

  return header;
}

export { createHeader };
