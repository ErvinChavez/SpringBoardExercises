/**Shows a single Pokemon, with their name, image, and type.  */

/**Use the defaultProps feature of Pokedex to 
provide a default list of Pokemon characters to show.
use this list for a good set of defaults:*/

function Pokecard({ id, name, type, base_experience}) {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <div>
            <h2>{name}</h2>
            <img src={imgSrc} alt={name} />
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    )
}
