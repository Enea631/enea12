import { useState } from "react"
import React  from 'react'
import { Button } from "react-bootstrap"


const NumberUseState = () => {
    const [count,setCount] = useState("lala")
    const [color,setColor] = useState("blue")
    const changeText =()=>{
      if (count==="lala"){
        setCount("dy")
        setColor("green")
      }else{
        setCount("lala")
        setColor("blue")}
    }
    
  return (
    <div>
      <h1>gfdujnh</h1>
      <h2 style={{color:color}}>{count}</h2>
      {/* <Button onClick={()=>setCount(count-1)}>-</Button>
      <Button onClick={()=>setCount(0)}>reset</Button>
      <Button onClick={()=>setCount(count+1)}>+</Button> */}
          <Button onClick={changeText}>reset</Button>
    </div>
  )
}

export default NumberUseState
