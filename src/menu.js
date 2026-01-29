// menu.js

import heroImage from "./assets/images/hero-image.jpg";

export function loadMenu() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("hero-container");

  const image = document.createElement("img");
  image.src = heroImage;
  image.classList.add("hero-image");

  hero.append(image);
  content.append(hero);
  console.log("Menu here");
}
