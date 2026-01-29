// home.js

import heroImage from "./assets/images/hero-image.jpg";
import foodImage from "./assets/images/food-image.jpg";

export function loadHome() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("hero-container");

  const image = document.createElement("img");
  image.src = heroImage;
  image.classList.add("hero-image");
  document.body.appendChild(image);

  const headLine = document.createElement("h1");
  headLine.textContent = "Ari's Bistro Bar & Restaurant";

  hero.appendChild(image);
  content.appendChild(headLine);
  content.appendChild(hero);
}
