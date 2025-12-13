import React, {useState} from "react";
import Circle from "./circle.jsx";
import ColorButtons from "./ColorButtons.jsx";

function getRandom(min = 0, max = 100) {
    return Math.random() * (max - min) + min;
}

const ColoredCircles = () => {
    const [circles, setCircles] = useState([])
    const addCircle = (color) => {
        setCircles(circles => [...circles, {color, x: getRandom(), y: getRandom()}])
    }
// const changePosition = idx =>{
//     setCircles(circles => {
//         const copy = [...circles];
//         copy[idx].x = getRandom();
//         copy[idx].y = getRandom();
//         return copy;

//         })
//     }
const changePosition = idx => {
    setCircles(circles => (
        circles.map((circle, i) =>(
            i === idx 
            ? {...circles, x: getRandom(), y:getRandom()}
            : circle
        ))
    ))
}

    return (
        <div>
            <ColorButtons addCircle={addCircle} options={['peachpuff', 'lightsteelblue', 'paleturquoise']}/>           
            {circles.map(({color, x, y}, idx) => (
                <Circle 
                changePosition= {changePosition}
                color ={color} 
                idx={idx} 
                key={idx} 
                x={x} 
                y={y}
                />
            ))}

        </div>
    )
}

export default ColoredCircles;