/**Is provided, via props, an array of objects 
describing different pokemon, and renders a 
sequence of Pokecard components.*/

function Pokedex({pokemon}) { //Run the Pokedex function with pokemon as prop
return (
  <div>
    <ul>
      { 
        pokemon.map((item, index) => ( //for each pokemon
          //make a li for each pokemon
          <li key={index}> 
            <Pokecard //run Pokecard for each
              id={item.id} //id as id prop
              name={item.name} //name as name prop
              type={item.type} //type as type prop 
              base_experience={item.base_experience} //base_experience as base_experience prop
            />
          </li>
        ))
    }
    </ul> 
  </div>
);
}
Pokedex.defaultProps = { //set a default prop for pokedex
    pokemon: [ //this pokemon list is the default prop
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]
};