const spoonacularAPIKEY = "cea7ccbc9d564f25906a5058dde3a512"; // Replace if expired
const recipeDisplay = document.getElementById("recipe-display");
const button = document.getElementById("get-recipe");

// Function to fetch a random recipe
async function getRandomRecipe() {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`);
        const recipe = response.data.recipes[0];

        // Clear previous content
        recipeDisplay.innerHTML = "";

        // Create elements for title and image
        const title = document.createElement("h3");
        title.textContent = recipe.title;

        const image = document.createElement("img");
        image.src = recipe.image;
        image.alt = recipe.title;

        // Append to display div
        recipeDisplay.appendChild(title);
        recipeDisplay.appendChild(image);

    } catch (err) {
        console.error(err);
        recipeDisplay.textContent = "Error fetching recipe!";
    }
}

// Event listener for button click
button.addEventListener("click", getRandomRecipe);