

const chuckNorrisAPI =() =>  {

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((joy) => {

    const div = document.querySelector("div");
    div.innerText = joy.value;
    div.style.color = 'white'
    div.style.fontSize = 'xx-large'
    
  })
  // .catch(err) 
  //   console.log("whoops", err)
  
}
chuckNorrisAPI()
// i tried a& failed here 
//const addEmoji = chuckNorrisAPI.map((text)=> `text + '🥲'`)




//add a form event
//preventDefault

//add api refresh to form or button
