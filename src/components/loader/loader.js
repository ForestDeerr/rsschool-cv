const loaderText = document.querySelector(".loader-text");

function setLoaderText(text) {
  loaderText.textContent = text;
}

async function updateLoader(text, duration = 1000) {
  setLoaderText(text);

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      setTimeout(resolve, duration);
    });
  });
}

export { updateLoader };
