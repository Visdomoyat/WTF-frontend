import React from 'react'
import Grid from './Grid/Grid.jsx'
import Keyboard from './Keyboard/Keyboard.jsx'

const Board = () => {
  return (
    <div>
     <h1 className='font-extrabold text-5xl m-4 tracking-[0.2em] text-blue-600 '>What The Food</h1>

     <Grid/>
     <Keyboard/>

     
      </div>
  )
}

export default Board