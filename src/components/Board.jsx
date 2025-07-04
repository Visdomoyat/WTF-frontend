import React from 'react'
import Grid from './Grid/Grid.jsx'
import Keyboard from './Keyboard/Keyboard.jsx'

// Test commit for GitHub contribution tracking
const Board = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
     <h1 className='font-extrabold text-5xl m-4 tracking-[0.2em] text-blue-600 '>What The Food</h1>

     <Grid/>
     <Keyboard/>
      <small className='m-5'> #Refresh page to play again with different word.</small>
     
      </div>
  )
}

export default Board