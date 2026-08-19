import { getNavigationLinks } from "../../constants.js";
import { createNavigation } from "../main-content/navigation-panel.js";
import { toggleBurgerMenu } from "./burger-button.js";

function burgerMobileMenu(lang, mobileMenu, burgerBtn) {
  mobileMenu.replaceChildren();
  mobileMenu.className = "mobile-menu";

  const links = getNavigationLinks(lang);

  const nav = document.createElement("nav");
  nav.className = "mobile-navigation-panel";

  const ul = document.createElement("ul");
  ul.className = "ul-mobile-menu";

  links.forEach(({ href, text }) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;

    li.append(link);
    li.addEventListener("click", () => {
      toggleBurgerMenu(burgerBtn, mobileMenu);
    });

    ul.append(li);
  });

  nav.append(ul);

  mobileMenu.append(nav);
}

export { burgerMobileMenu };
