function createAboutSection(lang) {
  const container = document.createElement("div");
  container.className = "main-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "main-container-title";

  const title = document.createElement("h2");
  title.id = "about";
  title.textContent = lang.aboutTitle;

  const contentContainer = document.createElement("div");
  contentContainer.className = "main-container-content";

  const text = document.createElement("p");
  text.textContent = lang.aboutText;

  titleContainer.append(title);
  contentContainer.append(text);
  container.append(titleContainer, contentContainer);

  return container;
}

export { createAboutSection };
