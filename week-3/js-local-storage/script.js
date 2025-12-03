/*const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  localStorage.setItem("colour", colour);
});

const colour = localStorage.getItem("colour");

if (colour) {
  const input = document.querySelector("input");
  input.value = colour;
}*/

const form = document.querySelector("form");

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const color = formData.get("color");

  const preferences = {
    color,
  };

  localStorage.setItem("preferences", JSON.stringify(preferences));
}

form.addEventListener("submit", savePreferences);

const preferences = JSON.parse(localStorage.getItem("preferences"));

if (preferences) {
  const input = document.querySelector("input");
  input.value = preferences.color;
}
function loadPreferences() {
  const preferences = JSON.parse(localStorage.getItem("preferences"));

  if (preferences) {
    const input = document.querySelector("input");
    input.value = preferences.color || "#000000";

    const body = document.querySelector("body");
    body.style.color = preferences.color || "#000000";
  }
}

function clearPreferences(event) {
  event.preventDefault();

  localStorage.removeItem("preferences");
}

const defaults = {
  color: "#000000",
};

body.style.color = preferences.color || defaults.color;

function handleLocalStorageChange(event) {
  if (event.key === "favouriteColor") {
    const newValue = event.newValue;
    console.log(`Local storage favouriteColour changed to: ${newValue}`);
  }
}

window.addEventListener("storage", handleLocalStorageChange);
