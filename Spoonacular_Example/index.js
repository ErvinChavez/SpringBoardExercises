const spoonacularAPIKEY = "cea7ccbc9d564f25906a5058dde3a512";

// axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`).then( (response) => {
//     console.log(response.data.recipes[0]);
// });


// complex search //

axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKEY}&cuisine=italian&diet=vegetarian`).then((response) => {
    console.log(response.data);
})