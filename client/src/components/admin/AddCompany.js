import React from "react";
import { Form, Button } from "react-bootstrap";

const AddCompany = () => {
  return (
    <div>
      <Form>
        <h2 ClassName="formheader">Add Company</h2>
        <Form.Group controlId="formBasicText">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Company Name"
            name="title"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddCompany;
