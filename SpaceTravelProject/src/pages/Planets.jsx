import { useEffect, useState } from "react"
import SpaceTravelApi from "../services/SpaceTravelApi";

export default function Planets() {
    /** Now that the return is made, we add hooks we need*/
    const [planets, setPlanets] = useState([]);
    const [spacecrafts, setSpacecrafts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    
    /** Same as before, created the file, then made the return to know what I need to get*/
    return (
        <div>
            <h1>Planets</h1>

            <section className="planets">
                <div className="planetCard">
                    <p>Earth</p>
                    <p>{'currentPopulation'}</p>
                    
                    <div className="planet-spacecraft">
                        <p>Prisppas</p>
                        <button>Send</button>
                    </div>

                </div>
            </section>
        </div>
    )
}