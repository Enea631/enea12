import React, { useState } from "react";
import { Button, Container, Table, Col, Row, Card } from "react-bootstrap";

const Array = () => {
  const people = [
    { id: 1, name: "Jane" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Sara" },
    { id: 4, name: "Violet" },
  ];
  const [info, setInfo] = useState(people);
  const deleteRow = (id) => {
    const newArray = info.filter((person) => person.id !== id);
    setInfo(newArray);
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {info.map((info) => {
            return (
              <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>
                  {" "}
                  <Button onClick={() => deleteRow(info.id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button onClick={() => setInfo([])}>Delete</Button>
      <Button onClick={() => setInfo(people)}>Reset</Button>
      <hr />
     
      <Container fluid>
        <Row>
          {info.map((info, index) => {
            return (
              <Col key={index} xs={12} md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <Button onClick={() => deleteRow(info.id)} variant="danger">
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Array;
