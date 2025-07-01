import React from 'react'
import Key from './Key.jsx'
import { ArrowLeftOutlined } from '@ant-design/icons'

function Keyboard() {
    const set1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const set2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const set3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  function Set1(){
    return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',margin:'0px'}}>
        
        {set1.map((char, index) => (
            <Key letter={char} key={index}/>
        ))}
    </div>
  )
}

    function Set2(){
        return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',margin:'0px'}}>
            {set2.map((char, index) => (
                <Key letter={char} key={index}/>
            ))}
        </div>
    )
}

    function Set3(){
        return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',margin:'0px'}}>
            <Key big={true} letter={'ENTER'}/>
            {set3.map((char, index) => (
                <Key letter={char} key={index}/>
            ))}
            <Key big={true} letter={<ArrowLeftOutlined/>}/>
        </div>
    )
}

return (
    <div>
        <Set1/>
        <Set2/>
        <Set3/>
    </div>
)
}

export default Keyboard
