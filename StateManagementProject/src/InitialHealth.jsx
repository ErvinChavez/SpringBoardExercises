import React from "react";
//Set Initial Health: Begin your game by setting both the player's
//and the enemy's health to 100.
//These health values will change based on gameplay actions.

const InitialHealth = (playersHealth = 100, enemysHealth = 100) => {
    //Am i using some type of useState here
    //This should be the starting health of the player and enemy

    return (
        <div className="Health">
            <p className="playersHealth">{playersHealth}</p>
            <p className="enemysHealth">{enemysHealth}</p>
        </div>
    );
}

export default InitialHealth;