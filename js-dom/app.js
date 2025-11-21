const body = image.querySelector("h1");

console.log(h1);

const mainContainer = document.createElement("div");

console.log(document.createElement("div"));

const heroImage = document.createElement("img");

const imgTitle = document.createElement("h2");

const imgDescription = document.createElement("h3");

console.log(heroImage);

heroImage.src = "https://media4.giphy.com/media/3NtY188QaxDdC/giphy.gif";

heroImage.alt = "happy sloth";

console.log(heroImage);

imgTitle.textContent = "Happy sloth!";
console.log(imgTitle);

mainContainer.appendChild(heroImage);
mainContainer.appendChild(imgTitle);

document.body.appendChild(mainContainer);
