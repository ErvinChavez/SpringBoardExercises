// look back at the <readme.md> file for some hints //
// working API key //

// axios.get("https://dog.ceo/api/breeds/image/random")
//     .then(function (response){ 
//         console.log(response.data); 
//     }) 

// axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
//     console.log(response.data
//     );
// })

axios.get("https://api.genderize.io?name=luc").then((response) => {
    console.log(response.data)
})