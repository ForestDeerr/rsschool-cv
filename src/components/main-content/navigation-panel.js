import { getNavigationLinks } from "../../constants.js";
import { gearBtn } from "../header/gear-button.js";
import { createSettingButtons } from "../header/setting-buttons.js";

function createNavigation(lang, burgerBtn) {
  const gear = gearBtn(createSettingButtons(lang));
  const links = getNavigationLinks(lang);

  const nav = document.createElement("nav");
  nav.className = "navigation-panel";

  const ul = document.createElement("ul");

  links.forEach(({ href, text }) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;

    li.append(link);
    ul.append(li);
  });

  nav.append(ul, gear, burgerBtn);

  return nav;
}

export { createNavigation };
