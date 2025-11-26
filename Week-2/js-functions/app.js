console.log("Hello World");

function sayHello() {
  console.log("Hello World");
}

sayHello();
sayHello();

/*function argumentFunction(argument1, argument2) {
  console.log(argument1, argument2);
}*/

/*function sayHelloTo(userName) {
  console.log("Hello " + userName + " How are you");
}
sayHelloTo("Robert");
sayHelloTo("James");
sayHelloTo("Jimmy");

function greet(Hello, Robert) {
  console.log(Hello + " Good Morning" + Robert + " Have a Nice Day");
}
greet("Hello", " Robert");

function add(a, b) {
  return a + b;
}
const result = add(1, 5);
console.log("The result is", result);
const anotherResult = add(2, 10);
{
  console.log("Another result is", anotherResult);
}*/

/*function multiply(a, b) {
  return a * b;
}
const result = multiply(3, 15);
console.log("The result is", result);
const anotherResult = multiply(3, 15);
{
  console.log("Another result is", anotherResult);
}*/

/*function subtract(a, b) {
  return a - b;
}
const result = subtract(3, 15);
console.log("The result is", result);
const anotherResult = subtract(3, 15);
{
  console.log("Another result is", anotherResult);
}*/

/*function divide(a, b) {
  return a / b;
}
const result = divide(3, 15);
console.log("The result is", result);
const anotherResult = divide(3, 15);
{
  console.log("Another result is", anotherResult);
}*/

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(3, 3);
  } else if (operator === "*") {
    return multiply(3, 3);
  } else if (operator === "/") {
    return divide(3, 3);
  }
}
const result = calculate(3, 3, "+", "-", "*", "/");

/*if (operator === "+") {
    return add(3, 3);
  } else if (operator === "-") {
    return subtract(3, 3);
  } else if (operator === "*") {
    return multiply(3, 3);
  } else if (operator === "/") {
    return divide(3, 3);
  }
}
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(3, 3);
    case "-":
      return subtract(3, 3);
    case "*":
      return multiply(3, 3);
    case "/":
      return divide(3, 3);
  }
}
{
  console.log("The Result is", Result);
}*/
