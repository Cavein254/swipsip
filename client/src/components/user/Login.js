import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import "./user.scss";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  const initialState = {
    email: "",
    password: "",
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

    const loginData = {
      email: userData.email,
      password: userData.password,
    };

    Axios.post("http://localhost:5000/api/user/login", loginData)
      .then((res) => res.data)
      .then((data) => {
        if (data.success) {
          console.log(data);
          history.push("/");
          dispatch({
            type: "LOGIN_USER",
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
    <div className="Container form-data">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={userData.email}
            onChange={handleOnChange}
            required
          />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userData.password}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <div>
        <code>
          {userData.errors ? <p> {userData.errors.toString()}</p> : ""}
        </code>
      </div>
    </div>
  );
};

export default Login;
