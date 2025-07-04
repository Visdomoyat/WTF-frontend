import React, { useState, useContext } from 'react'
import { foodContext } from '../../App'

const Tile =({id, rowId}) => {
    const [letter, setLetter] = useState('')
    const [completed, setCompleted] = useState(true)
    const {currentRow, completedRows, guessFood, food} = React.useContext(foodContext)
    const [colors, setColors] = useState({back:"white", font:"black"})

    const style = {
        backgroundColor: colors.back,
        color: colors.font,
    }

    function changeColors(){
      const arrayFood = food.split('')
      if(arrayFood.includes(letter)){
        if(arrayFood[id] === letter){
          return setColors({back:'lightgreen', font:'white'})
        }
        return setColors({back:'gold', font:'white'})
      }
      return setColors({back:'grey', font:'white'})

    }

    React.useEffect(() => {
      if(currentRow === rowId){
        setLetter(guessFood[id])
      }
      if(completedRows.includes(rowId) && completed){
        changeColors()
        setCompleted(false)
      }
    }, [guessFood, completedRows, currentRow, id, rowId])




  return (
    <div style={style} className="flex justify-center my-[2px] m-[2px] items-center w-[62px] h-[62px] border-2">
        <p className="flex self-center mb-2 font-bold text-5xl">{letter}</p>
    </div>
  )
}

export default Tile