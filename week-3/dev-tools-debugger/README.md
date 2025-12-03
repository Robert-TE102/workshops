Dev Tools Debugger - What is debugger? What do we use debugger for? Check debugger in the dev tools: Sources tab
Keywords - debugger, Sources, Breakpoint, Scope.
Debugger - Keyword to stop our code from executing - Debugger will add a breakpoint to stop the execution of our code. - We will see extra information on our breakpoint in the sources tab. -

practical -
const randomNumber = 78;
function countToTen(){
for (let i = 0; i < 10; i++) {
console.log(i);
debugger;
}
}/
