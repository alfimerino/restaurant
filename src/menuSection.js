import "./styles.css";

export function createMenuSection({ header, menuItems }) {
  const container = document.createElement("div");
  container.classList.add("menuItemContainer");

  const sectionHeader = document.createElement("h3");
  sectionHeader.classList.add('menuSectionHeader')
  sectionHeader.textContent = header


  container.append(sectionHeader);

  const menuItemsContainer = document.createElement('div')
  menuItemsContainer.classList.add('menuItem')

  menuItems.forEach((element) => {
    const item = document.createElement("span");
    item.classList.add('menuItem')
    item.textContent = element;
    menuItemsContainer.append(item);
  });

  container.append(menuItemsContainer)
  return container;
}
