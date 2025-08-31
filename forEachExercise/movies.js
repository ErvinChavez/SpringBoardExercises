//You are provided with an array of movie objects, each with a `title`, `director`, and `yearReleased`. Your task is to iterate over this array using the `forEach` method and log a message for each movie in the format: `"Title (Year) directed by Director"`.

const movies = [
	{title: "Inception", director: "Christopher Nolan", yearReleased: 2010},
	{title: "Interstellar", director: "Christopher Nolan", yearReleased: 2014},
	{title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", yearReleased: 1999},
	{title: "Blade Runner 2049", director: "Denis Villeneuve", yearReleased: 2017},
	{title: "The Martian", director: "Ridley Scott", yearReleased: 2015},
	{title: "Ex Machina", director: "Alex Garland", yearReleased: 2014},
	{title: "Arrival", director: "Denis Villeneuve", yearReleased: 2016},
	{title: "Eternal Sunshine of the Spotless Mind", director: "Michel Gondry", yearReleased: 2004},
	{title: "Minority Report", director: "Steven Spielberg", yearReleased: 2002},
	{title: "Ex Machina", director: "Alex Garland", yearReleased: 2014}
];

movies.forEach(function(value) {
	console.log(`${value.title} was released ${value.yearReleased} and directed by ${value.director}`)
});