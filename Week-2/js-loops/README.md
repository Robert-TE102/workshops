JS:Loops;
What is a loop?
Why do we use loops?
Examples in use;
Keywords - Methods.

//Loops;
Logic we use to make repetitive tasks more efficient;
we save time --> We write DRYer code (less repetitive);
Easier to debug;
Testing;
It's easier to modify / adjust;
It works with arrays;
Code is more organised and more readable;
Code is more dynamic --> Scalable;
Loops create a block scope;
File size.

//Loops;
//We use loops to make repetitive taks more efficient;
//We need to consider the amount of times we want a task to be executed;

//If we know the amount of times we want to execute a task --> for loop
//The task example: I want to create 5 paragraphs in my DOM
//The task example: i want to log in the onsole all the items in an array

//Structure
//Keyword (Set-up){
//Actions
//}

//For (initialisation; condition; afterthought){
//Task
//}

//Value of i < 5 = Stop.
//The increment operator adds 1 to a value; (i++)
for (let i = 0; i <= 5; i + 1 or i++){
//}
console.log (`This is a task repeated multiple times. Check how many. -->$`)
//For loops --> Examples
for (let i = 0; i <= loopLimit = 10; i + 1 or i++){
//}

console.log("Hello World");
/_for (let i = 0; i <= 10; i++) {
console.log(`This is a task repeated multiple times. ${i}`):
}_/

/_const paragraph = document.createElement("p");
{
paragraph.textContent = `Paragraph {i}`;
const container = DocumentFragment.getElementById("p-container");
container.appendChild(paragraph);
}_/

//For loops and arrays

//const colors = [" blue", "purple", "yellow", "green", "pink"];

//Initial value at 0 to match with the index value in the array
//We use the length property as our condition.

/_for (let i = 0; i < colors.length; i++) {
console.log(`item: ${colors[i]}`);
}_/

//Array methods
//forEach()
//for ... of --> alternative syntax.

//for (let color of colors) {
// console.log(colors);
//}

//A loop to use when we don't know how many times we want to run a task;
//Task example; while the user is not logged in, ask for login info;
//Structure
//while(condition){
//task}
//If the condition is never met, the loop runs forever.
//while(!user) {
//console.log("Please, log in");
//}
