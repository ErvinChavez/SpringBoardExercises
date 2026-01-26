export default function Spacecrafts() {
    return ( //what should the user see on this page (What is needed:)
        <div className="spaceCrafts"> 
            <button>Build Spacecraft</button>

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