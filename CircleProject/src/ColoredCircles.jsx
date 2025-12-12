import React, {useState} from "react";
import Circle from "./circle.jsx";

const ColoredCircles = () => {
    const [circles, setCircles] = useState(['cornflowerblue', 'peachpuff', 'lavender'])
    const addCircle = () => {
        setCircles(circles => [...circles, "magenta"])
    }
    return (
        <div>
            {circles.map((color, idx) => (
                <Circle color ={color} idx={idx} key={idx}/>
            ))}
            <button onClick={addCircle}>ADD</button>
        </div>
    )
}

export default ColoredCircles;