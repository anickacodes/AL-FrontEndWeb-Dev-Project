

function chuckNorrisAPI() {

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((joy) => {

    const div = document.querySelector("div");
    div.innerText = joy.value;
    
  })
  // .catch(reject) 
  //   console.log("whoops", reject)
  
}

chuckNorrisAPI()



//add a form event
//preventDefault

//add api refresh to form or button
