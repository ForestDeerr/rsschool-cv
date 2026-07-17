function createLogo(lang) {
  const logoSection = document.createElement("div");

  const logo = document.createElement("div");
  logo.className = "logo";

  const logoImg = document.createElement("div");
  logoImg.className = "logo-img";

  const img = document.createElement("img");
  img.className = "footer-img";
  img.src = "elk.png";
  img.alt = "Моё фото";
  img.width = 200;
  img.height = 200;

  const logoTitle = document.createElement("div");
  logoTitle.className = "logo-title";

  const h1 = document.createElement("h1");
  h1.className = "rgb";
  h1.textContent = lang.headerName;

  const h2 = document.createElement("h2");
  h2.className = "rgb";
  h2.textContent = lang.headerPosition;

  const left = document.createElement("div");
  left.className = "left";

  const right = document.createElement("div");
  right.className = "right";

  const back = document.createElement("div");
  back.className = "back";

  back.append(left, right);
  logoImg.append(img);
  logoTitle.append(h1, h2);
  logo.append(logoImg, logoTitle);
  logoSection.append(logo);

  return logoSection;
}

export { createLogo };
