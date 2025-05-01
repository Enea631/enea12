import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Col } from "react-bootstrap";

const CreateItem = () => {
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemImage: "",
    itemDescription: "",
  });
  const [imageShow, setImageShow] = useState(null);

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setNewItem({ ...newItem, itemImage: file });
    setImageShow(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(newItem).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await axios.post("http://localhost:5000/createItem/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group as={Col} className="mb-3" controlId="validationCustom01">
          <Form.Label>Item Title</Form.Label>
          <Form.Control
            required
            name="itemName"
            type="text"
            value={newItem.itemName}
            onChange={handleChange}
            placeholder=""
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="validationCustom02">
          <Form.Label>Item Image</Form.Label>
          <Form.Control
            required
            name="itemImage"
            type="file"
            onChange={handleImage}
            placeholder=""
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicKoment">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            name="itemDescription"
            type="text"
            value={newItem.itemDescription}
            onChange={handleChange}
            placeholder=""
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>

      {imageShow && <img src={imageShow} alt="Preview" className="img-fluid mt-3" />}
    </Container>
  );
};

export default CreateItem;
