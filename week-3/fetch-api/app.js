//console.log(Hello, World);
//I want to request data from an API.
//The browser reads our code synchronously (top to bottom, no waiting time) // Some actions in our code are asynchronous --> They take more time than the browser takes to be executed.
//When we have an async action, if the browser executes it synchronously, we get a promise --> the browser's way to let us know it executed that code (but it did not wait for the fetch response).
//To signal an action is async, we use async/await --> this only works for functions.

//async function name(params) {}
//`const`; synchronously
//async can be used once at the start and await can be used mutiple times.
//translate (parse) data into JSON, const data = await response.json(); //is a sync

function getFoxesData(https://randomfox.ca/floof) {
  fetch();
  const response = fetch("URL");
  console.log(response);
}

getFoxesData();
// Use that data to render animals from an API to my website.
const container = document.getElementById("https://randomfox.ca/floof");

function createContainer(https://randomfox.ca/floof) {
  const image = document.createElement("img");
  image.src = https://randomfox.ca/floof;
  image.alt = "Random foxes";
  container.appendChild(image);
}

//If we run these functions like this, createContainer runs first, then ContainerData, so the container image url is not ready before the img is created and appended.
//createContainer(await? getContainerData());

//control function to run getContainer and create ContainerImage in the order we want them too;
//async function renderContainer() {
// const ContainerData = await getContainerData();
//  createContainerImage(containerData); //This function will not be called until the data is ready.
//}

//renderContainer();
//Extra; What if we had a very large API? how do we filter the data that we want;
// I want to get a list of dummy users

//function getUsersData(){
//const response = await fetch ("URL");
//const usersData = await response.json();
// console.log(usersData);
//If the data here is large and you are not going to use all of it, you can wrangle the data --> filter the data to the properties you need.
//Why not use a loop to retrieve all the names in the array of objects.
//const wrangledUser = usersData[0].name;
//console.log(wrangledUser);
//return usersData
//}

/*{function getDogData(https://http.dog/[101].jpg)
    fetch ();
        const response = fetch ("https://http.dog/[101].jpg");
        console.log (response);
    }

    getDogData();

    const container=document.getElementById("https://http.dog/[101].jpg");

    function createContainer(https://http.dog/[101].jpg); {
  const image = document.createElement("img");
  image.src = https://http.dog/[101].jpg;
  image.alt = "Dog Error Codes";
container.appendChild(image);
    }*/
