import { getContactIcon } from "./contact-icons.js";

function createContacts(lang) {
  const container = document.createElement("div");
  container.className = "contact-container";

  const list = document.createElement("ul");
  list.className = "contact-list";

  lang.contacts.items.forEach((contact) => {
    const item = document.createElement("li");
    item.className = "contact-item";

    const img = document.createElement("div");
    img.className = "img";
    img.append(getContactIcon(contact.type));

    const text = document.createElement("div");
    text.className = "text";

    const label = document.createElement("p");
    label.textContent = `${contact.label}:`;

    const value = document.createElement("p");
    value.textContent = contact.value;

    text.append(label, value);

    if (contact.extra) {
      const extra = document.createElement("p");
      extra.textContent = contact.extra;
      text.append(extra);
    }

    item.append(img, text);
    list.append(item);
  });

  container.append(list);

  return container;
}

export { createContacts };
