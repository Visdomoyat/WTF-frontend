import React from 'react'
import Row from './Row.jsx'

const Grid = () => {
    const rows = [1,2,3,4,5,6]

  return (
    <div className="m-4">
        {
            rows.map((row, index) => (<Row id = {index} key = {index}/>))
        }
    </div>
  )
}

export default Grid