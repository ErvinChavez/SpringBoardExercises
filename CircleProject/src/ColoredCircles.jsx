import React, {useState} from "react";
import Circle from "./circle.jsx";
import ColorButtons from "./ColorButtons.jsx";

function getRandom(min = 0, max = 0) {
    return Math.random() * (max - min) + min;
}

const ColoredCircles = () => {
    const [circles, setCircles] = useState([])
    const addCircle = (color) => {
        setCircles(circles => [...circles, {color, x: getRandom(), y: getRandom()}])
    }
    return (
        <div>
            <ColorButtons addCircle={addCircle} options={['peachpuff', 'lightsteelblue', 'paleturquoise']}/>           
            {circles.map(({color, x, y}, idx) => (
                <Circle color ={color} idx={idx} key={idx} x={x} y={y}/>
            ))}

        </div>
    )
}

export default ColoredCircles;