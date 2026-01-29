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

  const blurbContainer = document.createElement('div')
  blurbContainer.classList.add('blurbContainer')
  blurbContainer.innerHTML = "Founded on the belief that dining should be an immersive escape, Ari's Restaurant & Bistro blends culinary precision with a rebellious spirit. Our kitchen focuses on locally sourced ingredients transformed through fire and imagination.<br><br>From the first pour of a craft cocktail to the final bite of our signature dessert, every detail is choreographed to create a memory. Whether you're here for a quiet date under our neon glow or a spirited celebration with friends, you're home."





  heroTextContainer.append(heroTextTitle, heroTextSubtitle)
  hero.append(image, heroTextContainer);

  content.append(hero, blurbContainer);
}
