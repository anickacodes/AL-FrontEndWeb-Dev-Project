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
const words = sentence.innerText.split(" ");

sentence.innerText = words
  .map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  })
  .join(" ");

const div = document.querySelector("div");

const newForm = document.createElement("form");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "sample text 🍱";

newForm.append(input);

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
const ul = document.querySelector('ul')

for (let i=1; i<5; i++) {
const li = document.createElement('li')

ul.append(li)
}


fetch("https://api.chucknorris.io/jokes/random?category=science")
  .then((response) => response.json())
  .then((joy) => console.log(joy.value));

