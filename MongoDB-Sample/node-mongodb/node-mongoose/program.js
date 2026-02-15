const { ObjectId } = require("mongodb");
const connect = require("./db");


//////
//CREATE
//////

// const runCreate = async () => {
//   const db = await connect();
//   const users = db.collection("users");

//   // Add a new user
//   const newUser = {
//     name: "Ervin Chavez",
//     email: "ervin@example.com"
//   };

//   const result = await users.insertOne(newUser);
//   console.log("New user inserted with ID:", result.insertedId);

//   process.exit(0);
// };

// runCreate();

/////////
//READ
////////
const runDatabaseQueries = async () => {
  const db = await connect();
  const movies = db.collection("movies");

  // // Run this query, should get top 5 best rated movies on IMDB
  // const topMovies = await movies.find({ "imdb.rating": { $gt: 8.0 } })
  //   .project({ title: 1, year: 1, "imdb.rating": 1 })
  //   .sort({ "imdb.rating": -1 })
  //   .limit(5)
  //   .toArray();
  //  console.log('Top Rated Movies:', topMovies);

  // //1. Movies by Christopher Nolan

  // const nolanMovies = await movies.find({directors: "Christopher Nolan"})
  //  .project({title: 1, year: 1, genres: 1})
  //  .toArray();

  //  console.log("Christopher Nolan Movies", nolanMovies)

  // //2.Find movies that include the genre "Action" and sort (descending) them by year.

  //  const actionMovies = await movies
  //    .find({ genres: "Action" })
  //    .sort({ year: -1 })
  //    .project({ title: 1, year: 1 })
  //    .limit(10)
  //    .toArray();

  //   console.log("Action Movies by Years", actionMovies);

  // //3.Find movies with an IMDb rating greater than 8( title and IMDB information)
  // const imdbRating = await movies.find({"imdb.rating":{$gt: 8}})
  //   .project({title: 1, imdb: 1})
  //   .toArray();
  //   console.log("IMDB Rating > 8", imdbRating);

  // //4.Find movies that starred both "Tom Hanks" and "Tim Allen".
  //   const tomTimMovies = await movies.find({$or: [{cast: "Tom Hanks"}, {cast: "Tim Allen"}]})
  //   .toArray();
  //   console.log("Movies ONLY with Tom Hanks and Tim Allen", tomTimMovies);
   

  // //5.Movies starring ONLY Tom Hanks and Tim Allen
  //    const onlyTomTim = await movies.find({cast: {$all: ["Tom Hanks", "Tim Allen"]}})
  //    .toArray();
  //    console.log("Movies with Tom Hanks and Tim Allen", onlyTomTim)

  // // 6. Comedy movies directed by Steven Spielberg
  //   const spielbergComedyMovies = await movies.find({genres: "Comedy", directors: "Steven Spielberg"})
  //     .toArray();
  //     console.log("Comedy Movies from Steven Spielberg", spielbergComedyMovies);

  //////
  ////UPDATE////
  /////


// //1. Add a new field "available_on" with the value "Sflix" to "The Matrix".
//   await movies.updateOne(
//     {title: "The Matrix"},
//     {$set: {available_on: "Sflix"}}
//   );

//   console.log("Added available_on to The Matrix");

// //2. Increment the metacritic of "The Matrix" by 1.
//   await movies.updateOne(
//     {title: "The Matrix"},
//     {$inc: {metacritic: 1}}
//   );
//   console.log("Incremented metacritic")

// //3. Add a new genre "Gen Z" to all movies released in the year 1997.
//   await movies.updateMany(
//     {year: 1997},
//     {$addToSet: {genres: "Gen Z"}}
//   );
//   console.log("Added Gen Z genre to 1997 movies");
  
// //4. Increase IMDb rating by 1 for all movies with a rating less than 5.
//   await movies.updateMany(
//     {"imdb.rating": {$lt: 5} },
//     {$inc: {"imdb.rating": 1}}
//   );
//   console.log("Updated low IMDb ratings");





/////
//DELETE
/////
const comments = db.collection("comments");

// //1. Delete a comment with a specific ID. (5a9427648b0beebeb6957a21)
// await comments.deleteOne(
//   {_id: new ObjectId('5a9427648b0beebeb6957a21')}
// );
// console.log("Deleted 5a9427648b0beebeb6957a21")

// //2. Delete all comments made for "The Matrix".
//   await comments.deleteMany(
//     {movie_id: new ObjectId('573a139bf29313caabcf3d23')}
//   )
//   console.log("Deleted all comments for The Matrix")

// //3. Delete all movies that do not have any genres.
//   await movies.deleteMany(
//     {$or: [{genres: {$exists: false}}, {genres: {$size: 0}}]}
//   );
//   console.log("Deleted movies with no genres");

//////
//AGGREGATE
//////


// //1. Aggregate movies to count how many were released each year and display from the earliest year to the latest.
//   const moviesPerYear = await movies.aggregate([
//     {$group: {_id: "$year", total_movies: {$sum: 1}
//     }}, {$sort: {_id: 1}}
//   ])
//   .toArray();

//   console.log("Movies Per Year", moviesPerYear);




// //2.Calculate the average IMDb rating for movies grouped by director and display from highest to lowest.
//   const avgByDirector = await movies.aggregate([
//     { $group: {_id: "$directors", avg_rating: {$avg: "$imdb.rating"}}},
//     {$sort: {avg_rating: -1}}
//   ]).toArray();
//   console.log("Average movie ratings by directors", avgByDirector);





  process.exit(0);
};

runDatabaseQueries();
