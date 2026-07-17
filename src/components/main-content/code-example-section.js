function createCodeExample(lang) {
  const container = document.createElement("div");
  container.className = "main-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "main-container-title";

  const title = document.createElement("h2");
  title.id = "skills";
  title.textContent = lang.codeExampleTitle;

  titleContainer.append(title);

  const editor = document.createElement("div");
  editor.className = "code-editor";

  const code = document.createElement("code");
  code.className = "code-block";

  const lines = [
    "function order(words) {",
    '  const wordsArray = words.split(" ");',
    "  const orderedWords = [];",
    "",
    "  for (let i = 1; i <= wordsArray.length; i++) {",
    "    const word = wordsArray.find(",
    "      w => w.includes(i.toString())",
    "    );",
    "",
    "    if (word) {",
    "      orderedWords.push(word);",
    "    }",
    "  }",
    "",
    '  return orderedWords.join(" ");',
    "}",
    "",
    "// Example",
    'order("is2 Thi1s T4est 3a");',
    '// ➜ "Thi1s is2 3a T4est"',
  ];

  lines.forEach((text, index) => {
    const row = document.createElement("div");
    row.className = "code-line";

    const number = document.createElement("span");
    number.className = "code-line-number";
    number.textContent = index + 1;

    const line = document.createElement("span");
    line.className = "code-line-content";
    line.textContent = text || " ";

    row.append(number, line);
    code.append(row);
  });

  editor.append(code);

  container.append(titleContainer, editor);

  return container;
}

export { createCodeExample };
