import { useContext } from 'react'
import { foodContext } from '../../App'

function Key(props) {

    const {guessTheFood, pressEnter, pressBackspace} = useContext(foodContext)
    function handleClickForBig(){
        if(props.letter === 'ENTER'){
            pressEnter()
        }
        else {
            pressBackspace()
        }
    }


    if (props.big){

    return (
       <button
       onClick={()=> handleClickForBig()}
       style={{
        width: 65.4,
        height: 58,
        margin: 3,
        borderRadius: 3,
        display: 'grid',
        placeItems: 'center',
        fontSize: 15,
        backgroundColor: '#d3d6da',
        color: 'black',
        fontFamily: 'Arial',
        cursor: 'pointer',
        border: 0,
        fontWeight: 'bold',
        }}
    >{props.letter} </button>

  )
}
return (
    <button
    onClick={()=> guessTheFood(props.letter)}
    style={{
        width: 43,
        height: 58,
        margin: 3,
        borderRadius: 3,
        display: 'grid',
        placeItems: 'center',
        fontSize: 15,
        backgroundColor: '#d3d6da',
        color: 'black',
        fontFamily: 'Arial',
        cursor: 'pointer',
        border: 0,
        fontWeight: 'bold',
    }}
>
    {props.letter}
</button>
)
}

export default Key
