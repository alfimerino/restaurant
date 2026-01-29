// index.js

import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
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

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  contentDiv.innerHTML = ""
  loadHome()
})

const menuLink = document.createElement("a");
menuLink.textContent = "Menu";
menuLink.href = "src/menu.js";
menuLink.classList.add("navLinks");

const contentDiv = document.querySelector("#content");

menuLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents the page from jumping/reloading
  contentDiv.innerHTML = ""; // Clear the home page content
  loadMenu(); // Run the code that builds your menu
});

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

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('devMenu')) {
    loadMenu();
} else {
    loadHome();
}

// loadHome();
console.log("Test ok!");
