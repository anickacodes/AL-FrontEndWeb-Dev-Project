fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((joy) => {

    const div = document.querySelector("div");
    div.innerText = joy.value;
    
  });

console.log("yo");
