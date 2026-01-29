// menu.js

import heroImage from "./assets/images/hero-menu.jpg";

export function loadMenu() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("hero-container2");

  const image = document.createElement("img");
  image.src = heroImage;
  image.classList.add("hero-image");


  const heroTextTitle = document.createElement("span");
  heroTextTitle.textContent = "Menu";
  heroTextTitle.classList.add("heroTextTitle");

  hero.append(image, heroTextTitle);
  content.append(hero);
  console.log("Menu her");
}
