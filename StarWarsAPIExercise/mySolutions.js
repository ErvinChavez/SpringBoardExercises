//My Attempt

//1.List All Films

//My Attempt
```query MyQuery {
    allFilms {
        films {
            created
            title
        }
    }
}```

//The Solution
```GraphQL
{
  allFilms {
    films {
      title
    }
  }
}
```

//2. Fetch a Specific Character:

//My Attempt
```query MyQuery {
    person(id: "cGVvcGxlOjE"){
    name
    }
}
```

//3. Explore Planets: Get the names of the first 5 planets in the Star Wars universe.

//My Attempt
```query MyQuery {
  allPlanets(first: 5) {
    planets {
      name
    }
  }
}
```

//4. Starships Information: Fetch names and models of 3 starships.

//My Attempt

```query MtQuery {
    allStarships(first: 3) {
        starships {
            name
            model
        }
    }
    }; 
```
//Intermediate Tasks

// 1. Character and Their Starships: For each of the first 5 characters, list the names of starships they've piloted.

//My Attempt

```query MyQuery {
    allPeople(first: 5) {
        people {
            name
            starships {
                name 
                model
            }
        }
    } 
}
```

//2.Species and Their Languages: Retrieve names and languages of 5 species.

//My Attempt

```query MyQuery {
    allSpecies(first: 5) {
        species {
            name
            language
        }
    }
}```

//3. Planets and Their Climates: Query for the names and climates of 5 planets.

//My Attempt

```query MyQuery {
    allPlanets(first: 5) {
        planets {
            name 
            climates
        }
    }
}```

//4. **Vehicles and Their Costs**: Get names and cost in credits for 3 vehicles.

//My Attempt

```query MyQuery {
    allVehicles(first: 3) {
        vehicles {
            name
            costInCredits
        }
    }
}```

//Advanced Tasks

//1.Characters in a Specific Film: List all characters appearing in a given film by ID.

//My Attempt

```query MyQuery {
    film (id: "ZmlsbXM6MQ==") {
        characterConnection {
            characters {
                name
            }
        }
    }
}```

//2.Multi-Film Characters: Find characters that appear in more than one film.

//My Attempt

```query MyQuery {
    allPeople{
        people {
            name
            filmConnection {
                totalCount
            }
        }
    }
}```

//3. Aggregate Film Statistics: Calculate the total number of characters across all films.

//My Attempt

```query MyQuery{
    allFilms {
        films {
            title
            characterConnection {
                totalCount
            }
        }
    }
}```

//Complex Tasks

//1. Full Character Profiles: Compile a full profile for a given character, including their films, starships, and homeworld.

//My Attempt

```query MyQuery{
    person(id: "cGVvcGxlOjE=") {
        name
        homeworld {
            name
        }
        filmConnection {
            films {
                title
                
            }
        }
        starshipConnection {
                    starships {
                        name

                    }
                }
    }
}
```

//2. Link Characters with Their Planets: Query the first 5 characters, including the name and population of their homeworld.

//My Attempt

```query MyQuery{
    allPeople(first: 5) {
       people {
        name
        homeworld {
            name
            population
        }
       }

    }
}
```


//3. Vehicles, Their Pilots, and Pilots' Species: For the first 3 vehicles, list their names, pilots, and the species of those pilots.

//My Attempt

```query MyQuery {
    allVehicles(first: 3) {
        vehicles{
            name
            pilotConnection {
                pilots {
                    name
                    species {
                        name
                    }
                }
            }
        }
    }
}
```


//4. Films and Their Associated Entities: For the first 3 films, list all related characters, planets, and starships.

//My Attempt

```query MyQuery {
  allFilms(first: 3) {
    films {
      title
      characterConnection {
        characters {
          name
        }
      }
      planetConnection {
        planets {
          name
        }
      }
      starshipConnection {
        starships {
          name
        }
      }
    }
  }```