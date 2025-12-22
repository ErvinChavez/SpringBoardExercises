import React from "react";
import "./HealthDisplay.css";

const HealthDisplay = ({playerHealth, enemyHealth}) => { //props of player and enemy health

    return ( //health of the player and the enemy
        <div>
          <p className="player">Player Health: <span className="score">{playerHealth}</span></p> 
          <p className="enemy">Enemy Health: <span className="score">{enemyHealth}</span></p>
        </div>
    );
}

export default HealthDisplay;