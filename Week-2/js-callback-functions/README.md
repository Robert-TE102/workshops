//JS: callback functions
//What is a callback function?
//examples in use?

//keywords: Functions,
//callback function,
//event,
//methods.

function: function greet(username, greeting){action}

greet("username", "greeting")

------(parameter - argument)

function add(a, b){action}

add(a, b)

greet(getUsername(), selectGreeting())

----callback function - A function that works as the argument of another function.

//examples; Events;

eventListenener --> call function:

eventHandler --> callback function (the event handler is an argument of the event listener)

A function with no name cannot be reused as it has nothing to call too (anonymous function)
button.addEventListener - function call - ("click", function ()){
action
}
//alternative syntax for event listener and handler.
function handleClick(){
action
}

function addEventListener(type, handler){
action
}

button.addEventListener("click", handleClick); <-- runs when user clicks the button> this is the preferred behaviour.
button.addEventListener("click", handleClick()); <-- runs the script in the browser>

// Say the users name
// Greet the user

function sayUsername(username) {
}

function greetUser(greeting) {
console.log(`${greeting}`);
}

function welcomeMessage(
greetUserParameter,
sayUsernameParameter,
greetParameter,
usernameParameter
)
{
//I want to control the greetUser and the sayUsername functions.
greetUserParameter("Greeting");
sayUsernameParameter("Name");
}
welcomeMessage(greetUser, sayUsername, "Name", "Greeting");
