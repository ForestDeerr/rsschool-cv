function createAboutContent(content) {
  const container = document.createElement("div");

  const p1 = document.createElement("p");
  p1.textContent = "This resume was created using HTML, CSS and JavaScript.";

  const p2 = document.createElement("p");
  p2.textContent =
    "The project was built without frameworks using reusable components.";

  const ul = document.createElement("ul");

  ["HTML", "CSS", "JavaScript", "Pixel Design"].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  });

  container.append(p1, p2, ul);

  return container;
}

export { createAboutContent };
