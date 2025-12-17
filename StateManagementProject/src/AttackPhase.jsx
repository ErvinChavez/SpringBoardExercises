import React from "react";

const AttackPhase = ({health}) => {
    //Bring in health and gamestatus(or just update gamestatus from this component if possible)

    // OnClick of the "Fire" button, do the following:

        //Determine random numbers in a range for each players
        //Deduct those numbers to their health
        //Check in this round if either of them or both went down to 0
        //If so update the game's status accordingly (win, loss, or draw)


    //function for random number:
    
    const randomNum = (num) => {
        Math.floor(Math.random * num  + 1)
    }

    return (
        <div>
            <button onClick={{
    
            }}><GameButton/></button>
        </div>
    )
}