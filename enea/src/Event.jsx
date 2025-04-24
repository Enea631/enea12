import React from 'react'
import { Button } from 'react-bootstrap'

const Event = () => {
    const oneInstruction =()=>{
        window.alert("jhdsfb")
    }
    const moreInstruction =()=>{
        window.alert("sfb")
    }
    const paramsFunction = (text)=>{
        window.alert("sfb"+text)      
    }
  return (
    <div>
        <h1>Event</h1>

      <Button onClick={()=>window.alert("Hello")}>SMS</Button>
      <Button onClick={oneInstruction}>SMS</Button>     
       <Button onClick={moreInstruction}>SMS more than once</Button>
       <Button onClick={()=>paramsFunction("react")}>SMS params 1</Button>
       <Button onClick={()=>paramsFunction("rett")}>SMS params 2</Button>
    </div>
  )
}

export default Event
