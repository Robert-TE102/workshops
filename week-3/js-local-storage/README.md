Local Storage - What is local storage? why do we use local storage? how to store data in local storage?
Keywords - Local Storage, Dev Tools, Stringify, Parse, JSON, Key-Value pairs.
Local Storage - Away to store data in the browser - Our data will persist between sessions - What data should we store in local storage?
User preferences, Game States - To store non-sensitive data that we want to keep between user sessions (data persistance).

Local storage is an object - in this object we have methods to store, read and delete data from local storage.

we can only store STRINGS in local storage.

const userPreferences - {
theme: "dark",
font: "large",
contrast: "high",
colourblindmode: true,
};
================================================================================================================================
Store new data in local storage -
STEP 1 - Stringify the data -
const stingifiedPreferences = JSON.stringify(userPreferences);

STEP 2 - Add stringify data to local storage;
localStorage.setItem("user preferences", stingifiedPreferences); = needs to be linked to html document.

Read data from local storage - STEP 1 - get the data from local storage
localStorage.getItem("user preferences");

STEP 2 - parse the stringified data to its original shape.
JSON.parse(storedPreferences);
console.log(parsedPreferences);

I want to remove an item from the local storage.
localStorage.removeItem("user preferences");
remove all items from local storage - localStorage.clear();
