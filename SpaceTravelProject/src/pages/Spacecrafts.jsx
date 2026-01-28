import { useState } from "react";
import SpaceCraftCard from "../components/SpacecraftCard";

export default function Spacecrafts() {

    /*So we know that the API will return the data format as a list of objects with values(this was given from the instructions):
    {
        id: <string>,
        name: <string>,
        capacity: <int>,
        description: <string>,
        pictureUrl: [<string>],
        currentLocation: <int>
    }  So we make a useState that has arrays of objects to get the info we want*/

    const [spaceCrafts, setSpaceCrafts] = useState([
        {id: 1, name: "Prispax", capacity: 10000},
        {id: 2, name: "Pelican", capacity: 200000},
    ])

    /* After finishing the spaceCraftCard lets make the loading screen, and catch errors*/
    const [isLoading, setIsLoading] = useState(true);//is the page loading right now?
    const [error, setError] = useState(null);//are there any current errors?



    /* Now we handle the destroy function, it happens here because this is where the useState is at: We basically want to run through the current(I guess previous) array of objects and filter through making a new array but leave out the one with the card that had the id when clicked on */
    function destroySpacecraft(id) {
        setSpaceCrafts((prevSpacecrafts) => 
            prevSpacecrafts.filter((craft) => 
                craft.id !== id)); 
    }
    
    return ( //what should the user see on this page (What is needed:)
        <div className="spaceCrafts"> 
            {/* button to the form section to build a new spacecraft */}
            <button>Build Spacecraft</button> 

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
                    name = {craft.name}
                    capacity = {craft.capacity}
                    pictureUrl={craft.pictureUrl}
                    onView = {() => alert(`View ${craft.name}`)}
                    onDestroy = {() => destroySpacecraft(craft.id)}
                />  
                ))}   
            </section>
            )}
        </div>
    );
}
