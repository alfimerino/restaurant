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

  const heroTextContainer = document.createElement('div')
  heroTextContainer.classList.add('heroTextContainer')


  const heroTextTitle = document.createElement('span')
  heroTextTitle.textContent = "Ari's"
  heroTextTitle.classList.add("heroTextTitle")

  const heroTextSubtitle = document.createElement('span')
  heroTextSubtitle.textContent = "Bar & Bistro"
  heroTextSubtitle.classList.add("heroTextSubtitle")

  heroTextContainer.append(heroTextTitle, heroTextSubtitle)
  hero.append(image, heroTextContainer);

  content.appendChild(hero);
}
