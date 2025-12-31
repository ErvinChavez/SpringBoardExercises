// import React from "react";

// function Card() {

//   fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//     .then((res) => res.json())
//     .then((data) => {
//       cardCode += data.cards[0].code;
//       cardImage += data.cards[0].image;   
//   })
// }

// export default Card;



import React, { useState } from "react";
import "./Card.css";

/** Single card: just renders the card as received from deck. */

function Card({ name, image }) { //function that returns the card with it's name and image
  // get these once; it will never be updated for the same card
  const [{ angle, xPos, yPos }] = useState({ //(not really sure how to read this useState) A useState that will create a random angle number for the angle, and a random number for xPos and yPos 
    angle: Math.random() * 90 - 45,
    xPos: Math.random() * 40 - 20,
    yPos: Math.random() * 40 - 20,
  });

  const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`; //the variable transform will set the xPos, yPos, and the angle for that card

  return <img //returns an image with a className, alt name for image, the src or url of the image, in the style of transform for each of the cards
      className="Card"
      alt={name}
      src={image}
      style={{ transform }} />;
}

export default Card;
