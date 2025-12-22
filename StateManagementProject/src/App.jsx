import { useState } from 'react'
import HealthDisplay from './healthDisplay';
import GameButton from './GameButton';
import EndofGame from './EndOfGame';

import './App.css'


function App({minDamage = 0, maxDamage = 50 }) {

  const initialHealth = 100;

  const [playerHealth, setPlayerHealth] = useState(initialHealth);//to render the playerHealth
  const [enemyHealth, setEnemyHealth] = useState(initialHealth); //to render the enemyHealth
  const [gameStatus, setGameStatus] = useState("ongoing"); //to render the gameStatus

  function handleAttack () {
    const playerAttack = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage; //random number to damge the enemy with;
    const enemyAttack = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage; // random number to damage the player with;
  
    const newPlayerHealth = Math.max(playerHealth - enemyAttack, 0); //What is the 0 for here??
    const newEnemyHealth = Math.max(enemyHealth - playerAttack, 0); //What is the 0 for here??

    setPlayerHealth(newPlayerHealth);//renders the playerHealth
    setEnemyHealth(newEnemyHealth);//renders the enemyHealth
    
    if (newPlayerHealth === 0 && newEnemyHealth === 0) { //if both end at 0 after attack
      setGameStatus("draw");
    } else if (newEnemyHealth === 0) { //if only the enemy ends in 0 after the attack
      setGameStatus("won");
    } else if (newPlayerHealth === 0) { //if only the player ends in 0 after  the attack
      setGameStatus("lost");
    }
  }

  function handleRestart() { //resets game to starting health and game status
      setPlayerHealth(initialHealth);
      setEnemyHealth(initialHealth); 
      setGameStatus("ongoing");
  }

  return (
    <div className='main-container'>
      <div className='title-container'>
        <h1>Space Battle Simulator</h1>
      </div>

      <div className='game-container'>
        <HealthDisplay
        playerHealth={playerHealth}
        enemyHealth={enemyHealth}
        />

        <GameButton
        gameStatus={gameStatus}
        onAttack={handleAttack}
        onRestart={handleRestart}
        />

      </div>
      <div className='message-container'>
        <EndofGame 
        gameStatus={gameStatus}
        />
      </div>
    </div>
  )


}
export default App