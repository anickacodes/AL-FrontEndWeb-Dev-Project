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
input.placeholder = "Type a word, add a space";
newForm.append(input);

//create submit button
const listSubmit = document.createElement("input");
listSubmit.type = "submit";

const ul = document.querySelector("ul");

newForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = input.value;

  if (inputText !== "") {
    const li = document.createElement("li");
    li.classList.add("category");
    li.innerText = inputText;
    ul.append(li);


    fetch("https://api.chucknorris.io/jokes/random?category=food")
      .then((response) => response.json())
      .then((joy) => li.append(joy.value));

    event.target.reset();
  }
});

newForm.append(listSubmit);

const newInput = document.createElement("input");
newInput.type = "submit";
newInput.value = "Just For Fun!";
newInput.style.color = "blue";

newInput.addEventListener("click", (event) => {
  event.preventDefault();

  newInput.onclick = alert(
    '🎉: Thank you for testing this feature! \nTo continue, click "OK" and \nYou can either click "Home" \nOr type some text and press "submit"'
  );
});

div.append(newForm);
newForm.append(newInput);
