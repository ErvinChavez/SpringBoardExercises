import React from "react";
import InitialHealth from "./InitialHealth";

const GameStatus = () => {

    
    //if health is still not zero for either players...game is active
        //keeps running a component that decreases health randomly for both players

        

    //when one player's health reaches 0
        //compare both the health
            //if player has higher health....return win message
            //if player has lower then enemy....return loss message
            //if player and enemy both get 0 at same time.... return draw message

    const value = <InitialHealth/>
    console.log(value)
    return (
        <div>
            <InitialHealth />
        </div>
    )
}

export default GameStatus;