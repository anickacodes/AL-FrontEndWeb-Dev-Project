// const ttry = fetch('https://amazon-price1.p.rapidapi.com/search?keywords=%3CREQUIRED%3E&marketplace=ES')
// .then((response)=> response.json())
// .then((JSONresponse)=> console.log(JSONresponse))
// console.log(ttry)


// const url = '';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b89fb8faa9msh40a677f6078ef48p1f0f40jsnb7ca42e40fb0',
		'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com'
	}
};
fetch('https://ali-express1.p.rapidapi.com/product/4000479928418?language=en', options)
.then((response)=> response.json())
.then((joy)=> console.log(joy))