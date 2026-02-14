const connect = require("./db");


const runDatabaseQueries = async () => {
  
  const db = await connect();
  const movies = db.collection('movies');


  // Run this query, should get top 5 best rated movies on IMDB
  // const topMovies = await movies.find({ "imdb.rating": { $gt: 8.0 } })
  //   .project({ title: 1, year: 1, "imdb.rating": 1 })
  //   .sort({ "imdb.rating": -1 })
  //   .limit(5)
  //   .toArray();

  // console.log('Top Rated Movies:', topMovies);

  // insert queries here to test them //

  const lucasMovies = await movies.find({  directors: "George Lucas"})
  .project({title: 1, year: 1, description: 1})
  .toArray();

  console.log("George Lucus Movies", lucasMovies);

  process.exit(0);
};


runDatabaseQueries();