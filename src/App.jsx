// src/App.jsx
import Board from './components/Board.jsx'
import './App.css'
import { createContext, useState } from 'react';
import { dictionary } from './components/Variables.jsx';


export const foodContext = createContext();

const App = () => {

  const [food, setFood] = useState('ABOUT')
  const [completedRows, setCompletedRows] = useState([])
  const [currentRow, setCurrentRow] = useState(0)
  const [guessFood, setGuessFood] = useState("")
  
  function guessTheFood(char){
    if(guessFood.length === 5) return;
    setGuessFood(guessFood.concat(char))
  }

  function pressEnter(){
    if(guessFood.length < 5) return;
    if(!dictionary.includes(guessFood.toLowerCase())) return alert('Food not found');
    if (guessFood === food) {
      alert("congratulations you've guessed the right food !!!!");
      return;
    }

    setCurrentRow(currentRow+1)
    setCompletedRows([...completedRows, currentRow])
    setGuessFood("")

  }

  function pressBackspace(){
    setGuessFood(guessFood.slice(0, guessFood.length-1))
  }

  return (

    <foodContext.Provider value={{
      food, 
      completedRows, 
      currentRow, 
      guessFood, 
      guessTheFood, 
      pressEnter, 
      pressBackspace}}>
      <Board/>
    </foodContext.Provider>
  )
  

};

export default App;
