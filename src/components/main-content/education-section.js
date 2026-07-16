function createEducation(lang) {
  const container = document.createElement("div");
  container.className = "main-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "main-container-title";

  const title = document.createElement("h2");
  title.id = "education";
  title.textContent = lang.education.title;

  titleContainer.append(title);

  const content = document.createElement("div");
  content.className = "main-container-content";

  const ul = document.createElement("ul");
  ul.className = "education";

  lang.education.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  });

  content.append(ul);

  container.append(titleContainer, content);

  return container;
}

export { createEducation };
