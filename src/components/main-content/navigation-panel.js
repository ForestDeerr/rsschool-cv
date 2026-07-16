import { getNavigationLinks } from "../../constants.js";

function createNavigation(lang) {
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

  nav.append(ul);

  return nav;
}

export { createNavigation };
