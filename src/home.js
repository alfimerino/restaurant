// home.js

import heroImage from "./assets/images/hero-image.jpg";
import foodImage from "./assets/images/food-image.jpg";

export function loadHome() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("hero-container");

  const image = document.createElement("img");
  image.src = foodImage;
  image.classList.add("hero-image");
  document.body.appendChild(image);

  hero.appendChild(image);
  content.appendChild(hero);
}
