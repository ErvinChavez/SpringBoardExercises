import React from "react";

function Deck() {
  (remaining)
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((res) => res.json())
    .then((data) => {
        return data.deck_id;
  })
}

export default Deck;
