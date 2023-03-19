const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
 
  const formElements = event.currentTarget.elements;

  const formElementsObj = {
    email: formElements.email.value,
    password: formElements.password.value,
  }
  

  if (formElementsObj.email === "" || formElementsObj.password === "") {
    alert("All the fields should not be empty");  
  } else {
    console.log(formElementsObj);
    form.reset();
  }

}
