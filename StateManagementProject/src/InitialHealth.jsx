import React from "react";
//Set Initial Health: Begin your game by setting both the player's 
// and the enemy's health to 100. 
// These health values will change based on gameplay actions.

const InitialHealth = ({health = 100}) => {
    //Am i using some type of useState here
    //This should be the starting health of the player and enemy


    return (
        <div className="Health">
            {health}
        </div>
    );
}

export default InitialHealth;