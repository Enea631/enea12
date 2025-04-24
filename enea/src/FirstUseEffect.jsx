import { useEffect, useState } from "react"
import React from 'react'

const FirstUseEffect = () => {
    const [count,setCount]=useState(0)
    useEffect(
        ()=>{
            setCount(count+1)
        },[]
       
    )
  return (
    <div>
        <h1>Fisrt</h1>
       <p>{count}</p>
    </div>
  )
}

export default FirstUseEffect
