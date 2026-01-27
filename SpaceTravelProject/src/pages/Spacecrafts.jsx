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
            <p>Loading Spacecrafts...</p>

            {/*Catch errors if failed to load */}
            <p>Failed to load Spacecrafts</p>

            {/*When all spacecrafts are destroyed, and left with empty state */}
            <p>No Spacecrafts available</p>

            {/* The list of sections that hold the info of one spacecraft with it's two buttons*/}
            <section className="spaceCraftsLists">

                {/* Now that we figured out the props in spaceCraftCard, we replace it here using just simple data, now we need to figure out how to get the real data */}
                {/* Now that we have a useState for it, lets go through the array of objects(spaceCrafts) from the useState and make a card for each ship called */}
                {spaceCrafts.map((craft) => (
                  <SpaceCraftCard
                    key = {craft.id}
                    name = {craft.name}
                    capacity = {craft.capacity}
                    onView = {() => alert(`View ${craft.name}`)}
                    onDestroy = {() => destroySpacecraft(craft.id)}
                />  
                ))}
                
            </section>
        </div>
    )
}
