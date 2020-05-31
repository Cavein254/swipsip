import React from "react";
import { Form, Button } from "react-bootstrap";

const AddProduct = () => {
  return (
    <div>
      <Form>
        <h2 ClassName="formheader">Add Product</h2>
        <form>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" />
            <label className="custom-file-label" htmlFor="customFile">
              Choose file
            </label>
          </div>
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        </form>

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
