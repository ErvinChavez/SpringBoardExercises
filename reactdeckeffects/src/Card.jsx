//MY FIRST ATTEMPT

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

//................................................................................

//COMPARING TO THE SOLUTION

/** Single card: just renders the card as received from deck. */



// function Card({ name, image }) { //function that returns the card with it's name and image
//   // get these once; it will never be updated for the same card
//   const [{ angle, xPos, yPos }] = useState({ //(not really sure how to read this useState) A useState that will create a random angle number for the angle, and a random number for xPos and yPos 
//     angle: Math.random() * 90 - 45,
//     xPos: Math.random() * 40 - 20,
//     yPos: Math.random() * 40 - 20,
//   });

//   const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`; //the variable transform will set the xPos, yPos, and the angle for that card

//   return <img //returns an image with a className, alt name for image, the src or url of the image, in the style of transform for each of the cards
//       className="Card"
//       alt={name}
//       src={image}
//       style={{ transform }} />;
// }

// export default Card;

//.................................................................................

//FINAL

//Rewriting for Retention
import React, { useState } from "react";
import "./Card.css";


//Here my thought should be, what do i want to be visible in the UI, the card image and name as the alt
//I also want the cards to be rotated in random angles
function Card(name, image) {
  const [{angle, xPos, yPos}] = useState({
    angle: Math.random() * 90 - 45,
    xPos: Math.random() * 40 - 20,
    yPos: Math.random() * 40 - 20,
  });

  const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

  return (
    <img
      className="Card"
      alt={name} //the name when drawn is map over in Deck component
      src={image} //the image when drawn is map over in the Deck component
      style={{transform}} //this will hold a CSS syntax that will translate and rotate the card
    />
  )
}

export default Card;