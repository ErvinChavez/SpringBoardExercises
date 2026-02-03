import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceCraftCard from "../components/SpacecraftCard";
import SpaceTravelApi from "../services/SpaceTravelApi";

export default function Spacecrafts() {
    const navigate = useNavigate();
    /*So we know that the API will return the data format as a list of objects with values(this was given from the instructions):
    {
        id: <string>,
        name: <string>,
        capacity: <int>,
        description: <string>,
        pictureUrl: [<string>],
        currentLocation: <int>
    }  So we make a useState that has arrays of objects to get the info we want*/

    const [spaceCrafts, setSpaceCrafts] = useState([]);

    /* After finishing the spaceCraftCard lets make the loading screen, and catch errors*/
    const [isLoading, setIsLoading] = useState(true);//is the page loading right now?
    const [error, setError] = useState(null);//are there any current errors?

    
    
    
    /*So after placing the logic only, of isLoading, error, empty, or with data; 
    Let's actually fetch the API to replace the mock logic we used just to help setup.
    We need to use a useEffect because this will run once when the page loads only */

    useEffect(() => {
        async function loadSpacecrafts() {
            /*At first set isLoading to true and error to null */
            setIsLoading(true);
            setError(null);

            /*Retrieve the Api from the given api file locally.
            HAVE TO GO BACK AND FIX SOMETHINGS B/C THIS WAS BUILT THINKING WE WOULD FETCH DATA FROM AN API SOURCE NOT LOCALLY*/
            const response = await SpaceTravelApi.getSpacecrafts();

            /* what happens when you get the data?
            First check if there is an error.
            If there isn't then return the data.
            After set is loading to false*/
            if (response.isError) {
                setError("Failed to load spacecrafts")
            } else {
                setSpaceCrafts(response.data)
            } 

            setIsLoading(false);
        }

        loadSpacecrafts();
    }, []);

    /* Now we handle the destroy function, it happens here because this is where the useState is at: We basically want to run through the current(I guess previous) array of objects and filter through making a new array but leave out the one with the card that had the id when clicked on.
    NEED TO FIX THIS B/C API IS FROM LOCAL FILE NOT OUTSIDE SOURCE AND IT ALREADY HAS A DESTROY FUNCTION WE CAN USE */
    async function destroySpacecraft(id) {
        setIsLoading(true);

        /*Local API has a destroy function already we can call */
        const response = await SpaceTravelApi.destroySpacecraftById({id});

        if (response.isError) {
            setError("Failed to destory spacecraft");
            setIsLoading(false);
            return;
        }

        /*Now we get the new updated list of spaceCrafts after the deletion */
        const refreshed = await SpaceTravelApi.getSpacecrafts();
        /*set setSpaceCrafts list to the new list  */
        setSpaceCrafts(refreshed.data);

        setIsLoading(false);
    }

    return ( //what should the user see on this page (What is needed:)
        <div className="spaceCrafts"> 
            {/* button to the form section to build a new spacecraft */}
            <button onClick={() => navigate("/spacecraft/new")}>Build Spacecraft</button> 

            {/* Loading state of the page */}
            {/* What user sees when the loading page is happening */}
            {isLoading && <p>Loading Spacecrafts...</p>}

            {/* What user sees when an error is caught */}
            {error && <p className="error">{error}</p>}

            {/* What user sees when there is no loading, no errors, and no more spacecrafts */}
            {!isLoading && !error && spaceCrafts.length === 0 && (
                <p>No spacecraftes available</p>
            )}

            {/* Now what happens when we do have spaceCrafts and no errors where found and no longer loading */}
            {!isLoading && !error && spaceCrafts.length > 0 && (

            /* The list of sections that hold the info of one spacecraft with it's two buttons*/
            <section className="spaceCraftsLists">

                {/* Now that we figured out the props in spaceCraftCard, we replace it here using just simple data, now we need to figure out how to get the real data */}
                {/* Now that we have a useState for it, lets go through the array of objects(spaceCrafts) from the useState and make a card for each ship called */}
                {spaceCrafts.map((craft) => (
                  <SpaceCraftCard
                    key = {craft.id}
                    id={craft.id}
                    name = {craft.name}
                    capacity = {craft.capacity}
                    description= {craft.description}
                    pictureUrl={craft.pictureUrl}
                    /** onView = {() => navigate(`/spacecraft/${craft.id}`)}  */
                    onDestroy = {() => destroySpacecraft(craft.id)}
                />  
                ))}   
            </section>
            )}
        </div>
    );
}
