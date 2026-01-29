// index.js

import "./styles.css";
import { loadHome } from "./home.js";
const navigation = document.querySelector(".navigation");

const headLine = document.createElement("h1");
headLine.textContent = "Ari's";

const navLinksContainer = document.createElement("div");
navLinksContainer.classList.add("navigation");

const homeLink = document.createElement("span");
homeLink.textContent = "Home";
homeLink.classList.add("homeLink");

navLinksContainer.appendChild(homeLink);
navigation.append(headLine, navLinksContainer);
loadHome();
console.log("Test ok!");
