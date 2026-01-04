// import React from "react";

// function Deck() {
//   (remaining)
//   fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     .then((res) => res.json())
//     .then((data) => {
//         return data.deck_id;
//   })
// }
// export default Deck;


//......................................................................................
// Compared to Solution


// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import axios from "axios";
// import "./Deck.css";

// const API_BASE_URL = "https://deckofcardsapi.com/api/deck"; //variable for the API url
// /** Deck: uses deck API, allows drawing card at a time. */

// function Deck() { //the deck component
//   const [deck, setDeck] = useState(null); //useState for the deck being used currently, currently null
//   const [drawn, setDrawn] = useState([]); //useState for the cards that have been drawn, currently empty array
//   const [isShuffling, setIsShuffling] = useState(false); //useState to see if deck is shuffled, currently set as false

//   useEffect(function loadDeckFromAPI() { //function that is going to use an async function fetchData() (Could I have not just started with an async function??)
//     async function fetchData() { //async function (this waits for the load first I believe so)
//       const d = await axios.get(`${API_BASE_URL}/new/shuffle/`); //variable d is set get the API from axios as a new shuffled deck (Why is axios being used and also why not fetch instead?)
//       setDeck(d.data);//setDeck will get rerendered and make deck equal to the d.data from the API
//     }
//     fetchData();//runs fetchData function
//   }, []);//useEffect will only rerender thin once because of the empty [] (I think i just answered my own question, we needed async function inside another to be able to call it after and and be able to use useEffect [] out that funtion to tell it to rerender once)



//   /** Draw card: change the state & effect will kick in. */
//   async function draw() {//this async function will draw the card
//     try {//this will use the try and catch style to catch any errors that have occur
//       const drawRes = await axios.get(`${API_BASE_URL}/${deck.deck_id}/draw/`);//variable drawRes will get the axios API url for drawing a card, using the same deckID and the draw endpoints

//       if (drawRes.data.remaining === 0) throw new Error("Deck empty!");//if the remaining for the data is 0, return an error with the Deck Empty!

//       const card = drawRes.data.cards[0];//card variable will be the objects inside data.cards

//       setDrawn(d => [ //This one not really sure about, so setDrawn will render and it will run a function named d that returns as a new array of that card drwan with all the values in d (which are objects), but will also return an object with that values for id, name, and image
//         {
//           id: card.code, //id is set to card.code
//           name: card.suit + " " + card.value,//name is set to card.suit and card.value
//           image: card.image,//image is the image url
//         },
//       ]);
//     } catch (err) { //if and error is catched
//       alert(err); //return that error as an alert
//     }
//   }

//   /** Shuffle: change the state & effect will kick in. */
//   async function startShuffling() {//this async function is about the shuffling the same deck 
//     setIsShuffling(true); //setIsShuffling function is set to true
//     try { //run a try, catch, and finally 
//       await axios.get(`${API_BASE_URL}/${deck.deck_id}/shuffle/`); //awaits to get the API using the same deckId to use same deck and adds the endpoint shuffle to shuffle the remaining cards in the deck
//       setDrawn([]);//run the setDrawn function 
//     } catch (err) { //if an error is catched then return that error as an alert in the page
//       alert(err);
//     } finally { //after set the setIsShuffling to false
//       setIsShuffling(false);
//     }
//   }

//   /** Return draw button (disabled if shuffling) */
//   function renderDrawBtnIfOk() {//this function will render a draw button
//     if (!deck) return null; //if there is no deck return null

//     return ( //return a button
//       <button //button will have a className, onClick with value to run the draw function, disabled set to the isShuffling (not sure what this disable is doing?) disable means “If we’re shuffling, don’t allow any actions”
//         className="Deck-gimme"
//         onClick={draw}
//         disabled={isShuffling}>
//         DRAW
//       </button>
//     );
//   }

//   /** Return shuffle button (disabled if already is) */
//   function renderShuffleBtnIfOk() { // this function will render a shuffle button
//     if (!deck) return null; //if there is no deck return null
//     return ( //return a button
//       <button  //button will have a className, onClick will run the startShuffling function, disabled set to the isShuffling(not sure what this disable is doing?) disable means “If we’re shuffling, don’t allow any actions”
//         className="Deck-gimme"
//         onClick={startShuffling}
//         disabled={isShuffling}>
//         SHUFFLE DECK
//       </button>
//     );
//   }

//   return (
//     <main className="Deck" /** return a main with className of Deck*/>

//       {renderDrawBtnIfOk() /** run the renderDrawBtnIfOk to return a draw button*/} 
//       {renderShuffleBtnIfOk()/** run the renderShuffleBtnIfOk to return a shuffle button*/}

//       <div className="Deck-cardarea">{  //inside a div with a className of Deck-cardarea
//         drawn.map(c => ( //map through each value in the drawn variable
//           <Card key={c.id} name={c.name} image={c.image} /> //run the Card component with the key, name, and image set to their specfic values
//         ))}
//       </div>

//     </main>
//   );
// }

// export default Deck;

//..................................................................................

//FINAL 


import React, {useEffect, useState} from "react";
import Card from "./Card";
import axios from "axios";

const API_BaseURL = "https://deckofcardsapi.com/api/deck" //this is the simplest form of the api before andding endpoints regarding what we want to retrieve for the components


function Deck() { //Ask yourself here, “What data fully describes this screen?”
  //These are the 3 UI we want presented
  const [deck, setDeck] = useState(null);//Do i have a deck yet? helped by the useEffect to render the deck in
  const [drawn, setDrawn] = useState([]);//What cards have been drawn, should have the id, name , and image
  const [isShuffling, setIsShuffling] = useState(false); //Am i shuffling//side effect that happen outside normal render
  
  //so now we know to use a useEffect to happen once to load a new deck
  //then the new deck loads and rerenders in setDeck so now deck is not an empty array now
  useEffect( 
    function loadDeckFromAPI() {  
      async function fetchData() {
        const d = await axios.get(`${API_BaseURL}/new/shuffle/`); //endpoints added to the API link, to retrieve a shuffled deck
        setDeck(d.data)//deck is render to equal array of d. data of the shuffled deck
      }
      fetchData(); //run the function
    }, []); //This will render only once

  //so now that deck is loaded we think what happens when you click the draw button(even though there is no button yet, ask what needs to happen when it is clicked anyways)
  async function draw() { //start an async funtion because it would wait for the deck to load 
    try {
      const drawRes = await axios.get(`${API_BaseURL}/${deck.deck_id}/draw/`); //drawRes is the API url for cards drawn

      if (drawRes.data.remaining === 0) throw new Error("Deck Empty!"); //If there is no reamining cards, throw an error alert

      const card = drawRes.data.cards[0]; //card will have all its values for the firs card

      setDrawn(d => [ // setDrawn is now going to change the drawn array to the values of the card drawn
        ...d, {
          id: card.code,
          name: card.suit + " " + card.value,
          image: card.image,
        },
      ])
    } catch (err) { //if an error occurs, return that error as alert
      alert(err);
    }
  }

  //So now we think what should happen when you click shuffle button
  async function startShuffling() { //Essentiality we want to reset the whole card drawing with the same deck but shuffled again
    setIsShuffling(true); //first we set isShuffling to true, this disables the draw and shuffle button
    try { 
      await axios.get(`${API_BaseURL}/${deck.deck_id}/shuffle`); //the API to reshuffle the same deck is called and also resets to 52 now
      setDrawn([]); //setDrawn is set back to an empty array to clear the UI of the drawn card previously
    } catch(err) { //if any error, return it as an alert
      alert(err);
    } finally {
      setIsShuffling(false); //At the end set isShuffling back to false to show the draw and shuffle button again
    }
  }

  //So now we think what should happen when the buttons are visible and clicked
  function renderDrawBtnIfOk() {
    if (!deck) return null; //if there is no deck return null(no button created)

    return (
      <button
        className="Deck-gimme"
        onClick={draw} //on click run draw function
        disabled = {isShuffling} //disable button if isShuffling is true, so not clickable
      >
        DRAW
      </button>
    );
  }

  function renderShuffleBtnIfOk() {
    if (!deck) return null; // if there is no deck return null(no button created)
    return (
      <button
        className="Deck-gimme"
        onClick={startShuffling} //on click run the startShffling function
        disabled={isShuffling} //disable button if isShuffling is true, so not clickable
      >
        SHUFFLE DECK
      </button>
    )
  }

  return (
    <main className="Deck">

      {renderDrawBtnIfOk} 
      {renderShuffleBtnIfOk}

      <div className="Deck-cardarea"> 
        { //So now we ask, what do we want to see on the UI when a card is drawn, 
          //So we decided we want to see the name and image, and id
          //ID is used to track cards drawn and help React manage the list efficiently

          drawn.map(c =>(
            <Card
              key={c.id}
              name={c.name}
              image={c.image}
            />
          )
          )
        }
      </div>

    </main>
  );
}