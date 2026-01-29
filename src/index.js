// index.js

import "./styles.css";
import { loadHome } from "./home.js";
import { createLinkCard, createMyLink } from "./linkCard.js";
const navigation = document.querySelector(".navigation");
navigation.classList.add("navigation");

const headLine = document.createElement("h1");
headLine.textContent = "Ari's";

const navLinksContainer = document.createElement("div");
navLinksContainer.classList.add("navLinksContainer");

const homeLink = document.createElement("a");
homeLink.textContent = "Home";
homeLink.href = "#";
homeLink.classList.add("navLinks");

const menuLink = document.createElement("a");
menuLink.textContent = "Menu";
// menuLink.href = '#'; ---- ADD THIS LINK
menuLink.classList.add("navLinks");

const contactLink = document.createElement("a");
contactLink.textContent = "Contact";
// contactLink.href = '#'; ---- ADD THIS LINK
contactLink.classList.add("navLinks");

const resButton = document.createElement("button");
resButton.textContent = "Reservations";
// resButton.href = '#'; ---- ADD THIS LINK
resButton.classList.add("resButton");

const footerContainer = document.createElement("footer");
footerContainer.classList.add("footer");

const myCreditText = document.createElement("a");




navLinksContainer.append(homeLink, menuLink, contactLink, resButton);
navigation.append(headLine, navLinksContainer);

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

const myLink = createMyLink();
footerContainer.appendChild(myLink);

document.body.appendChild(footerContainer);

loadHome();
console.log("Test ok!");
