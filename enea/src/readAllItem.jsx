import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";

const readAllItem = () => {
  const [allItem, setAllItem] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/readAllitem/")
        .then((res) => {
          console.log("res.data");
          setAllItem(res.data);
        })
        .catch((err) => {
          console.log("not" + err);
        });
    };
    fetchData();
  });
  return (
    <Container>
      <Row>
        {allItem.map((item) => {
          return (
            <Col md={6} xs={12} lg={4} key={item._id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={"http://localhost:5000/images/${item.itemImage}"} />
                <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Text>{props.descriptions}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default readAllItem;
