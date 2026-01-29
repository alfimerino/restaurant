import "./styles.css"; // Webpack magic happens here

export function createLinkCard({ name, url }) {
  const card = document.createElement("div");
  card.className = "link-card";

  card.innerHTML = `
        <span>
            <strong>${name}</strong> on <a href="${url}" class="module-link">Unsplash</a>
        </span>
    `;

  return card;
}

export function createMyLink() {
  const myCard = document.createElement("div");
  myCard.className = "link-card";

  myCard.innerHTML = `
    <a href="https://github.com/yourusername" class="card-link2">Created by Freddy M.</a>
    `;
  return myCard;
}
