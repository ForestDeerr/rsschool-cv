import { getNavigationLinks } from "../../constants.js";
import { burgerBtn } from "../header/burger-button.js";

function createNavigation(lang, burgerMenu) {
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

  nav.append(ul, burgerBtn(burgerMenu));

  return nav;
}

export { createNavigation };
