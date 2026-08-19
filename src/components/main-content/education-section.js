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

  container.append(titleContainer, content);

  lang.education.items.forEach((item) => {
    const educationItem = document.createElement("div");
    educationItem.className = "education-item";

    const institution = document.createElement("h3");
    institution.className = "education-institution";
    institution.textContent = item.institution;

    const details = document.createElement("p");

    if (item.faculty) {
      details.append(`${item.faculty}, `);
    }

    if (item.degree) {
      const degree = document.createElement("span");
      degree.className = "education-degree";
      degree.textContent = item.degree;

      details.append(degree, ", ");
    }

    const specialty = document.createElement("span");
    specialty.className = "education-specialty";
    specialty.textContent = item.specialty;

    details.append(specialty);

    if (item.qualification) {
      details.append(` — ${item.qualification}`);
    }

    educationItem.append(institution, details);
    content.append(educationItem);
  });

  return container;
}

export { createEducation };
