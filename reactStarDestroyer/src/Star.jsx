import { useRef, useEffect } from "react";
import "./Star.css"

function Star({id, position, destroyStar}) { //this component will have and id, position, and destroyStar props
    const starRef = useRef(null); // starRef holds a persistent reference to the DOM element


    
    useEffect(() => {// useEffect runs after the component renders to perform a DOM side effect (focusing)
        const star = starRef.current; //star will be set to the current star
        star.focus(); // focus this star element when it first appears
    }, []); // runs once when the star component mounts


    function handleClick(event) {//after it will handle a click of the star
        destroyStar(id);//the destroyStar will destory the star with the matching id
    }

    return (
        <div
            ref={starRef}
            tableIndex={"0"} 
            onClick={handleClick} //on click run the handleClick funtion
            style={{left: position.x, top: position.y}}//the stars will have there ownleft and top positions
            className={styles.star} // class name is the styles.star
        >
            &#9733;
        </div>
    );
}
export default Star;