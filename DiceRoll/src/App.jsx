import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dice from './Dice'
import './App.css'

function App() {
  return (
      <div className='App'>
        <Dice numDice={4} maxVal={6} title='Roll Me'/>
        <Dice />
      </div>
  )
}

export default App;
