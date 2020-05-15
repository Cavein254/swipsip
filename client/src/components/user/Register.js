import React from "react";

const Register = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="username" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="number" placeholder="Enter Age" />
          <Form.Text className="text-muted">
            Please note you have to be over 18 to register
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to terms and conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
