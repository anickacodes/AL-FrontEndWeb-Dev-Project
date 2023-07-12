

console.log("yo");


fetch("https://pokeapi.co/api/v2/type/18/")
  .then((response) => response.json())
  .then((joy) => console.log(joy.pokemon));
