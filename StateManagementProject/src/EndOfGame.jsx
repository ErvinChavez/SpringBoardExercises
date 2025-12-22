import React from "react";

const EndofGame = ({gameStatus}) => { //takes in the prop gameStatus
    if (gameStatus === "won") {
       return <p>You won! 🎉</p>; 
    } else if (gameStatus === "lost") {
        return <p>You lost 💀</p>;
    } else if (gameStatus === "draw") {
        return <p>Draw 🤝</p>;
    } else {
        return <p>Engage the enemy</p> 
    }
}

export default EndofGame;