import React from "react";
import "./circle.css";

const Circle = ({color, idx, x, y}) => {
    return (
        <div 
        className="Circle"
        style = {{
            backgroundColor: color,
            position: 'absolute',
            top: `${y}vh`,
            left:`${x}vw`
        }}
        >
            {idx +1}    
        </div>
    );
};

export default Circle;