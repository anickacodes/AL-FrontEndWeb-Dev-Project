//i was attempting scale transition big fail

// window.transitionToPage = function(href) {
//     document.querySelector('body').style.opacity = 0
//     setTimeout(function() {
//         window.location.href = href
//     }, 500)
// }

// document.addEventListener('DOMContentLoaded', function(event) {
//     document.querySelector('body').style.opacity = 1
// })
const sentence = document.querySelector("p");
sentence.style.fontWeight = "bold";
const words = sentence.innerText.split(" ");

sentence.innerText = words
  .map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  })
  .join(" ");

const div = document.querySelector("div");

const newForm = document.createElement("form");
newForm.id = "create-list";

//create text field
const input = document.createElement("input");
input.value = "";
input.type = "text";
input.required = true;
input.placeholder = "sample text 🍱";
newForm.append(input);

//create submit button
const listSubmit = document.createElement("input");
listSubmit.type = "submit";

listSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputText = input.value.trim();
  if (inputText !== "") {
    for (let i = 1; i < 5; i++) {
      const li = document.createElement("li");
      li.classList.add("category");
      //is this smart
      li.innerText = inputText
      ul.append(li);

      //i need help appending what's in the input to the li
     
      console.log(ul)
      fetch(
        "https://api.chucknorris.io/jokes/random?category=food"
      )
        .then((response) => response.json())
        .then((joy) => console.log(joy.value));
    }
    // ul.addEventListener("input", (event) => {
    //   console.log(event.target);

    event.target.reset();

    // });
  }
});

newForm.append(listSubmit);

const newInput = document.createElement("input");
newInput.type = "submit";
newInput.value = "Click Me!";
newInput.style.color = "blue";

newInput.addEventListener("click", (event) => {
  event.preventDefault();

  newInput.onclick = alert(
    'Congratulations: This feauture works! \nThank you for testing it out! \nTo continue, click "OK" and then click "Home"'
  );
});

div.append(newForm);
newForm.append(newInput);

//create error msg for form submmit
