import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./user.scss";
import { RegisterUserContext } from "../../context/RegisterUserContext";

const Register = () => {
  const history = useHistory();
  const { dispatch } = useContext(RegisterUserContext);

  const initialState = {
    username: "",
    email: "",
    age: "",
    password: "",
    password1: "",
    isAdmin: false,
    errors: "",
    loading: false,
  };

  const [userData, setUserData] = useState(initialState);

  const handleOnChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      loading: true,
    });

    const registerData = {
      username: userData.username,
      email: userData.email,
      age: userData.age,
      password: userData.password,
      password1: userData.password1,
      admin: false,
    };

    Axios.post("http://localhost:5000/api/user/register", registerData)
      .then((res) => res.data)
      .then((data) => {
        if (data.success) {
          history.push("/user/login");
          dispatch({
            type: "REGISTER_USER",
            payload: data,
          });
        } else {
          setUserData({
            ...userData,
            errors: data.msg,
          });
        }
      })
      .catch((err) => {
        setUserData({
          ...userData,
          errors: err,
        });
      });
  };

  return (
    <>
      <div className="form-wrapper">
        <Form ClassName="form-data">
          <Form.Group controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              name="username"
              value={userData.username}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={userData.email}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicNumber">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Age"
              name="age"
              value={userData.age}
              onChange={handleOnChange}
            />
            <Form.Text>
              Please note you have to be over 18 to register
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="password1"
              value={userData.password1}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
