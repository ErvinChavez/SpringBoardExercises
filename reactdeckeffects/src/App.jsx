import { useState, useEffect, useRef } from 'react'
import './App.css'

/**NOTES: 
 * From my understanding useRef is used to call the API once and not render a change
 * Fetch from the API
 * return API data as JSON
 * retrieve data needed from the data now
 * How many compondents do i need ??
 * Still need to use useState and useRef
 * useState will render a change to the state
 * the button click will render the change(to draw a new card)
 * useRef will not render a change but how will I use it here?
 * The change will be from te button
*/

//function getDeck fetchs the deck, NOT the card, return the deck.id to use same deck
// function getDeck() {
//   fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//       .then((res) => res.json())
//       .then((data) => {
//         deckId += data.deck_id;
//       })
// }



// //values being used
// let deckId = ""
// let cardCode = ""
// let cardImage = ""


//function getCard fetchs the one card, and returns the card image and card code
function getCard() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then((res) => res.json())
  .then((data) => {
    cardCode += data.cards[0].code; //append the cardCode
    cardImage += data.cards[0].image; //append the image
  })
}





//Get the image, making an image element.
    const imgElement = document.createElement('img');
    imgElement.src = data.cards[0].image;
    imgElement.alt = data.cards[0].code;


function App() {
  /*
  How Would I do it:

  -Start with the deck already fetched that is shuffled and deck count is one
    then return that deck id to keep using that same deck

  the button click will render the change of the state to:
    fetch url to draw a card using the same deck id to use same deck
    for ever card append it to outside variable with its image and card value
    the remaining cards should decrease by 1
    if remaining is now 0
      it should disappear the click button

      This part is actually very good:

Start with the deck already fetched BUT the button is the on thing visible on page load

Return deck id

Button click fetches a new card

Remaining decreases

If remaining is 0 → disable or stop

  */


//this fetches the number of decks and the deck ID
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => res.json())
  .then((data) => {
    deckId += data.deck_id;
  })



//function getCard fetchs the one card, and returns the card image and card code
function getCard() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then((res) => res.json())
  .then((data) => {
    cardCode += data.cards[0].code; //append the cardCode
    cardImage += data.cards[0].image; //append the image
  })
}

}
export default App