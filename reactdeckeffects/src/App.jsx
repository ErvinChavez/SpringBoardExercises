import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
function getDeck() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((res) => res.json())
      .then((data) => {
        deckId.append(data.deck_id);
      })
}

//values being used
const deckId = ""
const cardCode = ""
const cardImage = ""


//function getCard fetchs the one card, and returns the card image and card code
function getCard() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then((res) => res.json())
  .then((data) => {
    cardCode.append(data.cards[0].code) //append the cardCode

  })
}
//Get the image, making an image element.
    const imgElement = document.createElement('img');
    imgElement.src = data.cards[0].image;
    imgElement.alt = data.cards[0].code;


function App() {

//   const [cardDrawn, setDrawCard] = useState();


 
  //   useEffect(() => {
  //     fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //   })

  // return (
  //   <>
      
  //   </>
  // )
}
export default App