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

  lang.aboutText.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.className = "about-text";
    paragraph.textContent = text;
    contentContainer.append(paragraph);
  });

  titleContainer.append(title);
  container.append(titleContainer, contentContainer);

  return container;
}

export { createAboutSection };
