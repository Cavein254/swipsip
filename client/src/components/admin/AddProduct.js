import React from "react";
import { Form, Button } from "react-bootstrap";

const AddProduct = () => {
  return (
    <div>
      <Form>
        <h2 ClassName="formheader">Add Product</h2>

        <Form.Group controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" name="title" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type i.e. wine, beer, liquor"
            name="title"
          />
        </Form.Group>
        <Form.Group controlId="formBasicTextBox">
          <Form.Label>Description</Form.Label>
          <Form.Control type="textbox" placeholder="Product Description" />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Price" />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>In Stock</Form.Label>
          <Form.Control type="number" placeholder="Total in Stock" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Company </Form.Label>
          <Form.Control type="text" placeholder="Company Dropdown" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
