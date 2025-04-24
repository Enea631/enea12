import React from "react";
import cardcomp from "./CardComp";
import {container, Row,Col,key} from 'react-bootstrap';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import CardComp from "./CardComp";



const MainComp = () => {
    const infos=[
        {
    image: img1,
    title: "CArd 2",
    description: "Some",
    },
    {
        image: img2,
        title: "CArd 2",
        description: "Some",
    }
]
    return(
       <container>
        <h1>Info</h1>
        <Row>
            {infos.map((info,index)=>{
                return(
                    <Col key={index}>
            <CardComp image={info.image} title={info.title} description={info.description}/>
            </Col>

                )
            })}
            
        </Row>

       </container>
    )
}

export default MainComp;