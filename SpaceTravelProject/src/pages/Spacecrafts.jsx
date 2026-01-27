import SpacecraftCard from "../components/SpacecraftCard";

export default function Spacecrafts() {
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
                {/* Now that we figured out the porp in spaceCraftCard, we replace it here using just simple data, now we need to figure out how to get the real data */}
                <SpaceCraftCard
                    name = "Prispax"
                    capacity = {10000}
                    onView = {() => alert("View spacecraft")}
                    onDestroy = {() => alert("Destroy spacecraft")}
                />
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