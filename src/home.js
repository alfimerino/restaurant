// home.js

import heroImage from "./hero-image.jpg";

export function loadHome() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("hero-container");

  const image = document.createElement("img");
  image.src = heroImage;
  image.classList.add("hero-image");
  document.body.appendChild(image);

  const headLine = document.createElement("h1");
  headLine.textContent = "Welcome to the restaurant";

  hero.appendChild(image)
  content.appendChild(headLine);
  content.appendChild(hero);
}
