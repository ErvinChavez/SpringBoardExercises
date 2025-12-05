/**Is provided, via props, an array of objects 
describing different pokemon, and renders a 
sequence of Pokecard components.*/

function Pokedex({name, img, type, base_experience}) {
    return (
        <div>
            <h1>{name}</h1>
            <span>{img}</span>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    )
}