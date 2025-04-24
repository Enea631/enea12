import React ,{useState}from 'react'
import { Button } from 'react-bootstrap'

const Bolean = () => {
  const[hide,setHide]=useState(false)
  const changeTr=()=>{
    if (hide===false){
      setHide(true)
    }else{
      setHide(false)
    }
  }
  return (
    <div>
      <h1>Bolean</h1>
      <Button onClick={()=>changeTr(true)}>Dropdown</Button>
      {hide&&
      <ol>
        <li>ele1</li>
        <li>ele1</li>
      </ol>
}
    </div>
  )
}

export default Bolean
