// What is a function?
// Why do we use functions?
// Example: basic, DOM manipulation and events.

// Keywords: function, parameters, arguments, return, scope.

// Function = A Block of code --> we use a function to organise tasks with multiple steps.
// Control over complex tasks;
// Reusable; to declare functions = function = functionName (Parameter, parameter) & {action(s)}, (-->Function);

// for a function to execute we need to invoke it (call it)

// say Welcome.
// function sayWelcome(){
console.log("Welcome");
}

// say the name of the user in the console.
// function sayName(){ console.log ("Your name is ...")}

// We can call the same function as many times as we need.
//sayWelcome (); (can invoke multiple times)
//sayName ();

// A parameter is a place holder in our function that we can replace later with the actual value, this makes our function more reusable, we store one value per parameter and we can use the parameter name to represent the actual value.
// console.log("your name is ${username}`);

// Arguments --> a value assigned to a parameter, we add the arguments(s) in the function call;
sayName("...1")
sayName("...2")
sayName("...3")
sayName("...4")

//scope
console.log(username); = Scope is the area where my code is available.
//global scope --> a value is available anywhere in my code; Block scope --> A value is available only within its code block.
// username has a block scope, I can only use it inside it's own function.

(Block scope)
let username = "..."; (only available inside this function) --> this variable has global scope --> can be used anywhere.
// say the users Location;
function sayLocation(Location){
console.log(`your Location is ${Location}`);
console.log(`${username}, your Location is ${Location}`);
}
let locationUsername("...");
let username2 = "Robert";
sayLocation ("Norwich");

//say username and location in the console;
function sayUsernameLocation(username, usernameLocation){
console.log(`${username}, your location is ${userLocation}. Welcome`);
}
sayUsernameLocation("...", "Norwich");
sayUsernameLocation("...", "Northwich");

parameters in () (arguments).
// what if we have block-scoped value that we want to use outside its scope?
return;

// Add 2 numbers and log them;
function add(a, b){
console.log(a + b);
}

function add(a, b){
return a + b;
}
console.log(add(4, 6)); my console can log the addition a + b because of the keyword return, I made that operation available outside its block scope.
