import "./styles.css";

export function createMenuSection({ header, menuItems }) {
  const container = document.createElement("div");
  container.classList.add("menuItemContainer");

  const sectionHeader = document.createElement("h3");
  sectionHeader.textContent = header

  container.append(sectionHeader);
  menuItems.forEach((element) => {
    const item = document.createElement("span");
    item.textContent = element;
    container.append(element);
  });
  return container;
}
