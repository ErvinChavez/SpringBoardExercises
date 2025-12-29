import React from "react";

function Card() {

  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json())
    .then((data) => {
      cardCode += data.cards[0].code;
      cardImage += data.cards[0].image;   
  })
}

export default Card;
