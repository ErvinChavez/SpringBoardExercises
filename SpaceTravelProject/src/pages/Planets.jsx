import { useEffect, useState } from "react"
import SpaceTravelApi from "../services/SpaceTravelApi";

/*This is data for planets:
  id: <int>, // means data type is an integer
  name: <string>,
  currentPopulation: <int>,
  pictureUrl: [<string>] // means optional 
*/

/*This is data for spacecrafts: 
  id: <string>,
  name: <string>,
  capacity: <int>,
  description: <string>,
  pictureUrl: [<string>],
  currentLocation: <int>
*/

/*What sendSpacecraftToPlanet does(given to us already):

  *sendSpacecraftToPlanet	

  *sendSpacecraftToPlanet ({spacecraftId: <string>, targetPlanetId: <int>}): void	

  *Transfer people by sending the spacecraft from its currently located planet to the target planet.
    - If the capacity is greater than the current population of the currently located planet, it fills as much as it gets.
    - Throws an error if the target planet is the same as the currently located planet.
*/

export default function Planets() {
    /** Now that the return is made, we add hooks we need, and fetch the api also (we know to use useEffect)*/
    const [planets, setPlanets] = useState([]);
    const [spacecrafts, setSpacecrafts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    /**fetch the Api need, but make sure to set the loading screen too */
    useEffect(() => {
        async function loadData() {
            setIsLoading(true);
            setError(null);

            /*Fetch the Api for Planets and Spacecrafts */
            const planetRes = await SpaceTravelApi.getPlanets();
            const spacecraftRes = await SpaceTravelApi.getSpacecrafts();

            /*Check for errors on data fetch and if not render the data for their corresponding hooks.  */
            if (planetRes.isError || spacecraftRes.isError) {
                setError("Failed to load planets or spacecraft");
            } else {
                setPlanets(planetRes.data);
                setSpacecrafts(spacecraftRes.data);
            }

            /*Turn the loading screen off */
            setIsLoading(false);
        }
        
        loadData();
    }, [])

/*Ask myself: What spacecrafts are in the current planet */
function getSpacecraftsOnPlanet(planetId) {
    return spacecrafts.filter(
        (craft) => craft.currentLocation === planetId
    );
}

/*Lets fetch the given sendSpacecraftToPlanet logic */
async function sendSpacecraft(spacecraftId, targetPlanetId) {
    //another loadind screen 
    setIsLoading(true);

    const response = await SpaceTravelApi.sendSpacecraftToPlanet({
        spacecraftId, targetPlanetId,
    });


    if(response.isError) {
        setError("Failed to send spacecraft");
        setIsLoading(false);
        return;
    }


    const refreshed = await SpaceTravelApi.getSpacecrafts();
    setSpacecrafts(refreshed.data);

    setIsLoading(false);
}

if (isLoading) return <p>Loading planets...</p>
if (error) return <p className="error">{error}</p>;
    
    /** 
     * 1. Same as before, created the file, then made the return layout to know what I need to get
     * 2. Now towards the end we apply everthing to the return again
     */
    return (
        <section className="planet-list">
            {planets.map((planet) => (
                <div key={planet.id} className="planet-card">
                    <h2>{planet.name}</h2>
                    <p>Population: {planet.currentPopulation}</p>

                    {getSpacecraftsOnPlanet(planet.id).map((craft) => (
                        <div key={craft.id} className="planet-spacecraft">
                            <button 
                              onClick= {() => sendSpacecraft(craft.id, planet.id)}
                            >
                                {craft.pictureUrl ? (
                                     <img src={craft.pictureUrl} alt={craft.name}/>   
                                ) : ("Send" 
                                )}
                            </button>
                            <span>{craft.name}</span>
                        </div>
                    ))}
                </div>
            ))}
        </section>


        // <div>
        //     <h1>Planets</h1>
            
        //     <section className="planets">
        //         <div className="planetCard">
        //             <p>Earth</p>
        //             <p>{'currentPopulation'}</p>
                    
        //             <div className="planet-spacecraft">
        //                 <button>pictureUrl</button>
        //                 <p>Spacecraft Name</p>
        //                 <p>Capacity</p>
        //             </div>

        //         </div>
        //     </section>
        // </div>
    );
}