import React from "react";
import "./GameButton.css";

const GameButton = ({gameStatus, onAttack, onRestart}) => {
    return gameStatus === "ongoing" ? ( //if the gameStatus is still ongoing shoe fire button
        <div className="attack">
            <button onClick={onAttack}>Fire!</button>
        </div>
        ) : ( //else if show the restart button
          <div className="restart">
            <button onClick={onRestart}>Restart</button>
          </div>
        
        )
}

export default GameButton;