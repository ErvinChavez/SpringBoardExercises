import React, { useState} from "react";
import Die from "./Die";
import './Dice.css'

const Dice = ({numDice = 6, title = "Main Game", maxVal = 20}) => { //Dice is a component with values of numDice, title, and maxVal; each with a default value for them
    //This is where I start getting confused: 
    const [numbers, setNumbers] = useState(Array.from({length: numDice})); //the array const has numbers: this is an array of numbers I assume but what does it even start with? Just a blank array? //the setNumbers is a function right? //And how does this all equal to useState? is useState a function?
    const rollDice = () => { //this is a rollDice function that runs the setNumbers function
        setNumbers(numbers => ( //and setNumbers runs a numbers function 
            numbers.map(n => Math.floor(Math.random() * maxVal) + 1) //numbers function maps through each numbers creating an n equal to a random number
        ))
    }
    // const dice = [];
    // for (let i = 0; i < numDice; i++){
    //     const num = Math.floor(Math.random() * maxVal) + 1;
    //     dice.push(num);
    // }

    return (
        <div className="Dice">
            <h2>{title}</h2>
            <div>
                {numbers.map(num => <Die val={num} />)}
            </div>
            
            <button onClick={rollDice}>Roll</button>
        </div>
    )
}

export default Dice;