const div = document.querySelector("div");

const newForm = document.createElement("form");
div.append(newForm);

const newInput = document.createElement("input");
newInput.type = "submit";
newInput.value = "Click Me!";
newInput.style.color = "blue";

newInput.addEventListener("click", (event) => {
  event.preventDefault();

  newInput.onclick = alert('Congratulations: This feauture works! \nThank you for trying it out!')

});
// newInput.onclick= alert('Hey, this feature works! \nThanks for trying it out!')

newForm.append(newInput);

//create error msg for form submmit
