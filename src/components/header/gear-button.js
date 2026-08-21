import { loadStyle } from "../utils/load-style.js";
loadStyle("./src/components/header/gear.css");

function gearBtn(setting) {
  const borderGear = document.createElement("div");
  borderGear.className = "border-gear";

  const gearContainer = document.createElement("button");
  gearContainer.className = "gear-btn";

  let n = 4;
  let angel = 0;

  for (let i = 0; i < n; i++) {
    const toothGear = document.createElement("div");
    toothGear.className = "tooth-gear";
    toothGear.style.transform = `rotate(${angel}deg)`;
    gearContainer.append(toothGear);
    angel += 45;
  }

  const bodyGear = document.createElement("div");
  bodyGear.className = "body-gear";

  const holeGear = document.createElement("div");
  holeGear.className = "hole-gear";

  gearContainer.append(bodyGear, holeGear);
  borderGear.append(setting, gearContainer);

  let itOpen = false;
  borderGear.addEventListener("click", () => {
    itOpen = !itOpen;
    borderGear.classList.toggle("open", itOpen);
    setting.classList.toggle("open-setting");
  });

  return borderGear;
}

export { gearBtn };
