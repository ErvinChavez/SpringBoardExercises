const connect = require("./db");

// //CREATE

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


//READ

const runDatabaseQueries = async () => {
  
  const db = await connect();
  const movies = db.collection('movies');


  // // Run this query, should get top 5 best rated movies on IMDB
  // const topMovies = await movies.find({ "imdb.rating": { $gt: 8.0 } })
  //   .project({ title: 1, year: 1, "imdb.rating": 1 })
  //   .sort({ "imdb.rating": -1 })
  //   .limit(5)
  //   .toArray();

  // console.log('Top Rated Movies:', topMovies);

  // //1. Movies by Christopher Nolan

  // const nolanMovies = await movies.find({directors: "Christopher Nolan"})
  // .project({title: 1, year: 1, genres: 1})
  // .toArray();

  // console.log("Christopher Nolan Movies", nolanMovies)
  // process.exit(0);

  // //2.Find movies that include the genre "Action" and sort (descending) them by year.

  // const actionMovies = await movies.find({genres: "Action"})
  // .sort({year: 1})
  // .project({title: 1, year: -1})
  // .limit(10)
  // .toArray();

  // console.log("Action Movies by Years", actionMovies)

  

};


runDatabaseQueries();

