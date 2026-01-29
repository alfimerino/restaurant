// index.js

import "./styles.css";
import { loadHome } from "./home.js";
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


const footerContainer = document.createElement('footer');
footerContainer.classList.add('footer');
footerContainer.textContent = '© 2024 Ari\'s Bar & Bistro';

document.body.appendChild(footerContainer);


navLinksContainer.append(homeLink, menuLink, contactLink, resButton);
navigation.append(headLine, navLinksContainer);


loadHome();
console.log("Test ok!");
