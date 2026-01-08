import { useState, useEffect } from "react";
import Star from "./Star";
import "./Space.css"


function Space () {
// useEffect sets up a side effect (an interval) that runs every 2.5 seconds
// and cleans it up when the component unmounts
const starSize = 40; //could be whatever size you want

// setStars updates the stars state, causing the component to re-render
const [stars, setStars] = useState([]);


useEffect(() => {
    const intervalid = setInterval(() => { // store the interval ID so it can be cleared later
        const newStar = { //every star will have...
            id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`, //an unique id
            x: Math.random() * (window.innerWidth - starSize), //a random x value
            y: Math.random() * (window. innerHeight - starSize) // a random y value
        };
        setStars(prevStars => [...prevStars, newStar]);//setStars will add that new star made to the rest of the stars that have been made
    }, 2500); //the interval is every 2.5 seconds
    return () => clearInterval(intervalid); // cleanup function clears the interval when the component unmounts
}, []); // empty dependency array means this effect runs once on mount

function destroyer(id) { //destory the star based on the id
    setStars(stars.filter(star => star.id !== id)); //will filter through each stars made by id, and return all the onces that don't match that id.
}

return (
    <div className={styles.space}>
        {
            stars.map(star => ( //map through the array of stars currently
                <Star // render a Star component for each star in state
                    key= {star.id} //with a key of the id
                    id={star.id} //with a specific id 
                    position={{x: star.x, y: star.y}} //with a position for it on the x and y axis
                    destroyStar={destroyer}//with destroyStar being the destroyer funtion
                />
            ))
        }

    </div>
);

}
export default Space;




//DIDN'T HAVE TO USE THIS ACTUALLY
// function generateStar() { //making the star will return what for each of them
//     return { //an object of...
//         id: crypto.randomUUID(), //a unique id for each star
//         xPos: Math.random() * (window.innerWidth - starSize), //random xPos for it
//         yPos: Math.random() * (window.innerHeight - starSize) //random yPos for it
//     }
// }