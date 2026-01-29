// index.js

import "./styles.css";
import { loadHome } from "./home.js";
const navigation = document.querySelector(".navigation");
navigation.classList.add("navigation");

const headLine = document.createElement("h1");
headLine.textContent = "Ari's";

const navLinksContainer = document.createElement("div");
navLinksContainer.classList.add("navLinksContainer");

const homeLink = document.createElement("span");
homeLink.textContent = "Home";
homeLink.classList.add("navLinks");

const menuLink = document.createElement("span");
menuLink.textContent = "Menu";
menuLink.classList.add("navLinks");

const contactLink = document.createElement("span");
contactLink.textContent = "Contact";
contactLink.classList.add("navLinks");

const resButton = document.createElement("button");
resButton.textContent = "Reservations"
resButton.classList.add('resButton')

navLinksContainer.append(homeLink, menuLink, contactLink, resButton);
navigation.append(headLine, navLinksContainer);
loadHome();
console.log("Test ok!");
