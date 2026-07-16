import { courses } from "../../constants.js";

function createCourses(lang) {
  const course = courses;
  const container = document.createElement("div");
  container.className = "main-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "main-container-title";

  const title = document.createElement("h2");
  title.id = "courses";
  title.textContent = lang.coursesTitle;

  titleContainer.append(title);
  container.append(titleContainer);

  course.forEach((course) => {
    const content = document.createElement("div");
    content.className = "main-container-content";

    const p = document.createElement("p");

    const link = document.createElement("a");
    link.href = course.url;
    link.target = "_blank";
    link.textContent = course.name;

    const br = document.createElement("br");

    const strong = document.createElement("strong");
    strong.textContent = course.course;

    p.append(link, br, strong, ` ${course.description}`);

    const ul = document.createElement("ul");

    course.skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.append(li);
    });

    content.append(p, ul);
    container.append(content);
  });

  return container;
}

export { createCourses };
