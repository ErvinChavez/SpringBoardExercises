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


function App() {

  const [cardDrawn, setDrawCard] = useState();


 
    useEffect(() => {
      fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
    })
  }

  return (
    <>
      
    </>
  )

export default App

