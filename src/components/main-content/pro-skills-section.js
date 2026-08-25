function createProSkills(lang) {
  const container = document.createElement("div");
  container.className = "skills-container";

  const titleBlock = document.createElement("div");
  titleBlock.className = "title-blok";

  const title = document.createElement("p");
  title.textContent = lang.proSkills.title;

  titleBlock.append(title);

  const list = document.createElement("ul");
  list.className = "skills-list";

  lang.proSkills.items.forEach((skill) => {
    const skillContainer = document.createElement("div");
    skillContainer.className = "skill-container";

    const imageSkill = document.createElement("img");
    imageSkill.className = "image-skill";
    imageSkill.src = skill.image;

    skillContainer.append(imageSkill);

    const item = document.createElement("li");
    item.className = "skills-item";

    const text = document.createElement("div");
    text.className = "text";

    const p = document.createElement("p");
    p.textContent = skill.name;

    text.append(p);

    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";

    const progress = document.createElement("div");
    progress.className = "progress";
    progress.style.width = `${skill.level}%`;

    progressBar.append(progress);
    item.append(text, progressBar);

    skillContainer.append(item);
    list.append(skillContainer);
  });

  container.append(titleBlock, list);

  return container;
}

export { createProSkills };
