// look back at the <readme.md> file for some hints //
// working API key //

//PRACTICE:

// axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
//     console.log(response.data
//     );
// })

//axios.get("https://api.genderize.io?name=ervin").then((response) => {
//     console.log(response.data)
// })

// axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKEY}&cuisine=italian&diet=vegetarian`).then((response) => {
//     console.log(response.data);
// })

//PROJECT

//const spoonacularAPIKEY = "cea7ccbc9d564f25906a5058dde3a512";

//Attemp 1:
// axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${spoonacularAPIKEY}`)
//     .then(function (response){ 
//         console.log(response); 
// }) 

//Button Layout

// let button = document.getElementById("submit")


// button.addEventListener("click", function() {
//     console.log("I submited the button")
// })

//Attempt 2

//Use given code from readme:

//   async function giphyRequest() {
//     const response = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${spoonacularAPIKEY}`);
//     console.log(response);
//   }
//   giphyRequest();
//Keep getting a ERR_BAD_REQUEST

//Using given api_key this time:
  // async function giphyRequest() {
  //   const response = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  //   console.log(response);
  // }
  // giphyRequest();


//Changing parameters of API slighty
//  async function giphyRequest() {
//     const response = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=10`);
//     console.log(response);
//     const imageURL = response.data.data[0].images.downsized.url;
//     const image = document.getElementById("gifPic");
//     image.src = imageURL;
//   }
//   giphyRequest();

//Doing the Search for Gifs

const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const search = document.getElementById('search');
const myForm = document.getElementById('myForm');
const image = document.getElementById("gifPic");

myForm.addEventListener('submit', async function giphyRequest(e) {
    e.preventDefault();

    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search.value}`);
    console.log(response);
    
    const imageURL = response.data.data[0].images.downsized.url;
    image.src = imageURL;

  });


