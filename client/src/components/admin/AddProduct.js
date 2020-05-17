import React from "react";
import { Form, Button } from "react-bootstrap";

const AddProduct = () => {
  return (
    <div>
      <Form>
        <div className="mb-3">
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isValid />
            <Form.File.Label data-browse="Upload">
              Choose Picture
            </Form.File.Label>
            <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback>
          </Form.File>
        </div>
        <div className="mb-3">
          <Form.File id="formcheck-api-regular">
            <Form.File.Label>Regular file input</Form.File.Label>
            <Form.File.Input />
          </Form.File>
        </div>
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
