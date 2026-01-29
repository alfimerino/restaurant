// menu.js

import heroImage from "./assets/images/hero-menu.jpg";
import { createMenuSection } from "./menuSection.js";

export function loadMenu() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("hero-container2");

  const image = document.createElement("img");
  image.src = heroImage;
  image.classList.add("hero-image");

  const blurbContainer = document.createElement("div");
  blurbContainer.classList.add("blurbContainer");

  const menu = [
  {
    header: "Starters",
    menuItems: [
      "Grilled Avocado Wedges — 6",
      "Savory Potato Cakes — 7",
      "Crispy Vegetable Potstickers — 8",
      "Root Vegetable Crisps — 6",
      "Garlic Butter Eggplant — 7",
      "Toasted Risotto Bites — 6",
      "Hearty Farmhouse Vegetable Soup — 5"
    ]
  },
  {
    header: "Main Plates",
    menuItems: [
      "Savory Garden Pancake — 14",
      "Seasonal Vegetable Pot Pie — 15",
      "Wild Mushroom Pappardelle — 15",
      "Crispy Tofu Schnitzel — 16",
      "Loaded Croquette Sliders — 14",
      "Zucchini Noodle Primavera — 15"
    ]
  },
  {
    header: "Fresh Salads",
    menuItems: [
      "Bistro House Salad — 8",
      "Warm Forest Mushroom Salad — 7",
      "Classic Garden Potato Salad — 7"
    ]
  },
  {
    header: "Refreshments",
    menuItems: [
      "Toasted Grain Tea — 3",
      "Sparkling Plum Tonic — 4",
      "Roasted Black Bean Infusion — 4",
      "Classic Iced Green Tea — 3"
    ]
  }
];

  menu.forEach((section) => {
    const element = createMenuSection(section);
    blurbContainer.append(element);
  });
  /*
const users = [
  { name: "Food Image by Lily Banse", url: "/profile/alex" },
  { name: "Interior Image by Shawn", url: "/profile/blake" },
  { name: "Menu Image by Ruyan Ayten", url: "/profile/charlie" },
  { name: "Wine Glasses Image by Siniz Kim", url: "/profile/charlie" },
];

// Reusable render logic
users.forEach((user) => {
  const element = createLinkCard(user);
  footerContainer.appendChild(element);
});

*/

  const heroTextTitle = document.createElement("span");
  heroTextTitle.textContent = "Menu";
  heroTextTitle.classList.add("heroTextTitle");

  hero.append(image, heroTextTitle);
  content.append(hero, blurbContainer);
  console.log("Menu her");
}
