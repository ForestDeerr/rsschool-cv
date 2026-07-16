function createCodeExample(lang) {
  const container = document.createElement("div");
  container.className = "main-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "main-container-title";

  const title = document.createElement("h2");
  title.id = "skills";
  title.textContent = lang.codeExampleTitle;

  const contentContainer = document.createElement("div");
  contentContainer.className = "main-container-content-cod";

  const pre = document.createElement("pre");
  const code = document.createElement("code");

  code.textContent = `function order(words) {
  const wordsArray = words.split(" ");
  const orderedWords = [];

  for (let i = 1; i <= wordsArray.length; i++) {
    const word = wordsArray.find(w => w.includes(i.toString()));

    if (word) {
      orderedWords.push(word);
    }
  }

  return orderedWords.join(" ");
}

// Example
order("is2 Thi1s T4est 3a");
// ➜ "Thi1s is2 3a T4est"`;

  pre.append(code);
  contentContainer.append(pre);
  container.append(titleContainer, contentContainer);
  titleContainer.append(title);

  return container;
}

export { createCodeExample };
