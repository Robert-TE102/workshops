//Forms
//In our JS, we are going to collect the data from our form
//-event
//-form data

//event --> submit
//event listener --> attached to the form
const userForms = document.getElementById("user-form");
userForm.addEventListener("Submit");
//event handler --> collect the forms data

function handleSubmit(submitEvent) {
  //prevent the forms default behaviour
  //preventDefault();
  //
  SubmitEvent.preventDefault();
  //create a template object to store our user's data
  const formData = new FormData(userForm);
  console.log(formData);
  //convert (parse) our formData into an object shape
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
}

//Store formValues
// database
// local storage
//render (display) the values on the screen
//login
