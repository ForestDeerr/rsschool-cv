function createLanguage(lang) {
  const container = document.createElement("div");
  container.className = "main-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "main-container-title";

  const title = document.createElement("h2");
  title.id = "language";
  title.textContent = lang.language.title;

  titleContainer.append(title);

  const content = document.createElement("div");
  content.className = "main-container-content";

  const ul = document.createElement("ul");
  ul.className = "education";

  lang.language.items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "education-list";

    const educationTitle = document.createElement("div");
    educationTitle.className = "education-title";

    const p = document.createElement("p");
    p.textContent = item.name;

    educationTitle.append(p);

    const stars = document.createElement("div");
    stars.className = "stars";

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("div");
      star.className = i <= item.level ? "star full" : "star";
      stars.append(star);
    }

    li.append(educationTitle, stars);
    ul.append(li);
  });

  content.append(ul);
  container.append(titleContainer, content);

  return container;
}

export { createLanguage };
