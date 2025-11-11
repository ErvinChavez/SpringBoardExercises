// go to the spoonacular api, get random recipe //
// click a button ad display that recipe //
// the browser needs to display it //

const spoonacularAPIKEY = "cea7ccbc9d564f25906a5058dde3a512";

const button = document.getElementById("generate-button");
const displayDiv = document.getElementById("display-div");

button.addEventListener("click", function() {
    // console.log("I clicked the button")
   getRandomRecipe();
});

async function getRandomRecipe() {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`)
    console.log(response);
    displayDiv.innerHTML = "";

    //adding a new div into the "generated recipe" section of page
    
    let newDiv = document.createElement("div");
    let h3 = document.createElement("h3");

    //set the recipe title into the header
    h3.innerHTML = response.data.recipes[0].title;
    displayDiv.appendChild(h3);

    //set the recipe summary into the new div
    newDiv.innerHTML = response.data.recipes[0].summary;
    displayDiv.appendChild(newDiv);
}



//Notes: I used a get and .then promise, but a better way is to use the async way
// axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`).then((response) => {
//         console.log(response.data.recipes[0]);
//     });