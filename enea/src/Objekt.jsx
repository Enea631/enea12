import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Objekt = () => {
    const [object,setObject]=useState(
        {
            firstName:"enea",
            lastName:"lala",
            age:20,
        }
    )
  return (
    <div>
        <h1>hgcgfc</h1>
      <p>{object.firstName}{object.age}</p>
      <Button onClick={()=>setObject({...object,firstName:"beni"})}>Change Name</Button>
    </div>
  )
}

export default Objekt
