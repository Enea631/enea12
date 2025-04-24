import { useState } from "react";
import axios from "axios";
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import UseEffect from "./UseEffect";
// import './Format.css'

const Format = () => {
  // const [emri, setEmri] = useState("");
  // const [mbiemri, setMbiemri] = useState("");
  // const [email, setEmail] = useState("");
  // const [koment, setKoment] = useState("");
  // const [sms, setSms] = useState("");
  // const messageForm = (e) => {
  //   e.preventDefault();
  //   setSms("faleminderit " + emri + " " + mbiemri + ".");
  // };

  const [newCont, setNewCont] = useState({
    firstName: "",
    lastName: "",
    email: "",
    koment: "",
  });

  const handleChange = (e) => {
    setNewCont({ ...newCont, [e.target.name]: e.target.value });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/createContact/", newCont)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Form</h1>
      <Form onSubmit={handleSumbit}>
        <Form.Group as={Col} mb="3" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            name="firstName"
            type="text"
            value={newCont.firstName}
            onChange={handleChange}
            placeholder="First name"
          />
        </Form.Group>

        <Form.Group as={Col} mb="3" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            name="lastName"
            type="text"
            value={newCont.lastName}
            onChange={handleChange}
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={newCont.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicKoment">
          <Form.Label>Koment</Form.Label>
          <Form.Control
            name="koment"
            type="text"
            value={newCont.koment}
            onChange={handleChange}
            placeholder="Koment"
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
      {/* <p>{sms}</p> */}
    </div>
  );
};

export default Format;
