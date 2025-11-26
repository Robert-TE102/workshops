console.log("Hello World");

function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction, doing complex tasks");
  console.log("Task complete, i will notify User");
  notifyUserCallback();
}

function notifyUser(myAwesomeFunction) {
  console.log("notifyUser function was called");
}

function myAwesomeFunction(onCompleteCallback) {
  console.log("Running myAwesomeFunction, doing complex tasks");
  console.log("Task complete, I will notify user");
  onCompleteCallback();
}

/*myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});*/

myAwesomeFunction2(() => {
  console.log("notifyUser function was called!");
});

function myAwesomeFunction2(OnSuccessCallback, OnFailureCallback) {
  console.log("Running myAwesomeFunction2, doing complex tasks");
  console.log("Task Complete, I will notify user");
  const success = Math.random() > 0.5;
  if (success) {
    OnSuccessCallback({
      message: "Success",
    });
  } else {
    OnFailureCallback();
  }
}

function OnAwesomeSuccess2(data) {
  console.log("It was successful: ", data.message);
}

function OnAwesomeFailure2() {
  console.log("It failed :(");
}

function add(a, b) {
  return a + b;
}

function multiply(a, b){
    return a * b;
}

function myCalculatorFunction(a, b, operationCallback){console.log("doing a calculation using the numbers.",a, b);
    console.log ("Might have a code that saves and stores the data.");
}

return operationCallback(a, b);
const result 