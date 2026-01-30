/**Notes: this page handles 1 spacecraft;
 * reads the id from url
 * fetch the spacecraft api
 * handles the same loading and eroor
 * displays details
 * allows going back
 */

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; /**hooks to be able to match ids and to be able to navigate */
import SpaceTravelApi from "../services/SpaceTravelApi";

export default function Spacecraft() {
    const {id} = useParams(); /**Used to match the id to the right spacecraft */
    const navigate = useNavigate(); /*On the return, this will navigate back one time when clicked */

    /**We are now going to repeat what we see in the Spacecrafts page: */
    const [spacecraft, setSpaceCraft] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadSpacecraft() {
            setIsLoading(true);
            setError(null);

            const response = await SpaceTravelApi.getSpacecraftById({id});

            if(response.isError || !response.data) {
                setError("Failed to load spacecraft");
            } else {
                setSpaceCraft(response.data);
            }

            setIsLoading(false);
        }
        
        loadSpacecraft();
    }, [id]);


    return (
        <div className="spacecraft">
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>{spacecraft.name}</h1>
            <p><strong>Capacity:</strong> {spacecraft.capacity}</p>
            <p><strong>Description: {spacecraft.description}</strong></p>

            {spacecraft.pictureURl && (
                <img 
                    src= {spacecraft.pictureURl} 
                    alt= {spacecraft.name}
                />
            )}
        </div>
    );
}