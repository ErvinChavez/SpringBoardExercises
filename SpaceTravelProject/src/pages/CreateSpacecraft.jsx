import { useState } from "react";
import {useNavigate} from "react-router-dom";

import SpaceTravelApi from "../services/SpaceTravelApi";

export default function CreateSpacecraft() {
    /*After creating the file, and making the return logic to see what we need, I should now be able to add the hooks that I need. */
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [description, setDescription] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    /* After creating the page, ask myself, What do i want the UI to show on this page,
     * So start with the return to see what I need to add to retrieve the info I need.
     * I now know I need:
     * Name, Capacity, Description, pictureURL
     */

    /**Now that we have the hooks, we can connect them to the inputs in the return */

    /*Now that the hooks and the returns are connected, he can put how to handle the submit button */
   async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !capacity || !description) {
        setError("Name, capacity, and description are required.")
        return;
    }
    
    setIsLoading(true);
    setError(null);

    const response = await SpaceTravelApi.buildSpacecraft({
        name,
        capacity: Number(capacity),
        description,
        pictureUrl: pictureUrl || undefined,
    });

    if (response.isError) {
        setError("Failed to build spacecraft");
        setIsLoading(false);
        return;
    }

    navigate("/spacecrafts");
    setIsLoading(false);

   }
   
   /*Now that we finished, on what happens on submit we connect it back to the return */
    return (
        <div className="create-spacecraft">
            <h1>Build a New Spacecraft</h1>
            
            {error && <p className="error">{error} </p>}
            {isLoading && <p>Building spacecraft...</p>}


            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </label>

                <label>
                    Capacity
                    <input type="number" 
                        value={capacity} 
                        onChange={(e) => setCapacity(e.target.value)} 
                        required
                    />
                </label>

                <label>
                    Description
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Picture URL {/*Make this optional */}
                    <input 
                        type="text"
                        value={pictureUrl}
                        onChange={(e) => setPictureUrl(e.target.value)}
                    />
                </label>

                <button type="submit" disabled={isLoading}>Build</button>
            </form>

        </div>
    )
}