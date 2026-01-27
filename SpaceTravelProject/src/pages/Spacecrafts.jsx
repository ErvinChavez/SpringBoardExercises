import { useState } from "react";
import SpacecraftCard from "../components/SpacecraftCard";

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
    ])
    
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
                    onDestroy = {() => alert("Destroy spacecraft")}
                />  
                ))}
                
            </section>
        </div>
    )
}


/**
 * What is needed:
 * 
 * 1."Build a Spacecraft" Button, that goes into a form page to creat a new spacecraft
 * 
 * 2.Loading screen(while calling the Api) 
 * 3. At load, its a conatiner(div) and inside of it.. (This is probably it's own component)
 * Name: Prispax(Spacecraft name)
 * Capacity:(The amount of capacity)
 * and 2 buttons:
 * -one is an image button (goes to page of the description of the spacecraft)
 * -other is the "destroy" button (this deletes the current container the button was in)
 */