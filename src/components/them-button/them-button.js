import { loadStyle } from "../utils/load-style.js";

function createThemBtn() {
  loadStyle("./src/components/them-button/them-button.css");

  let currentThem = localStorage.getItem("them") || "dark";

  const themBtn = document.createElement("button");
  themBtn.className = "them-btn";

  const halfCircle = document.createElement("div");
  halfCircle.className = "sun";

  themBtn.append(halfCircle);

  const beams = [];

  let angle = 0;
  const n = 12;

  for (let i = 0; i < n; i++) {
    const beam = document.createElement("div");
    beam.className = `beam ${currentThem}`;
    beam.style.transform = `rotate(${angle}deg)`;

    beams.push(beam);
    themBtn.append(beam);
    angle += 30;
  }

  themBtn.addEventListener("click", () => {
    currentThem = currentThem === "dark" ? "light" : "dark";

    localStorage.setItem("them", currentThem);
    document.documentElement.dataset.theme = currentThem;

    beams.forEach((beam) => {
      beam.classList.remove("dark", "light");
      beam.classList.add(currentThem);
    });
  });

  return themBtn;
}

export { createThemBtn };
