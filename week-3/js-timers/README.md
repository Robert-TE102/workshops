JS Timers: What are timers? Why do we use them? Examples in use?:
Keywords: Timer; Intervals; Timeouts, async.
Timers; Countdown --> Timeout Shopping, Sales, Website Timeout, Bank Operations, Chatbot, are you there timer; Intervals, --> interval, Periodic Increment, Product shuffle in a website, DD/Interest Payment, Reminders, In-game stat effects, Cookie Clicker Game.

// Timers;
//Types of timers; Timeout - After time runs out , an action happens
//Interval - An action happens after a specific after a specific amount of time periodically (unless you stop it).
// To decide what type of timer you need, ask

//TODO: I want to remind myself to drink water every 5 seconds;

setInterval(function (){
console.log("Please, Drink some water");
}, 5000); Ctrl+C to stop timer in terminal.

//setTimeout(function () {
console.log("")
}

//setInterval(function () {
console.log("pay rent")
}, 5000);

//const rentReminder = setInterval(function () {
console.log("pay rent");
}, 10000);

//setTimeout(function () {
clearInterval(rentReminder);
},20000;

//I want to remind myself to pay my rent every 2 seconds for a total of 10 seconds.

//N.B Timers are asynchronous.
