import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import "./user.scss";
import { Redirect, useHistory } from "react-router-dom";
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
    console.log("handle submit");
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
          history.push("/user/profile");
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

// class Login extends React.Component {
//   state = {
//     email: "",
//     password: "",
//     payload: "",
//     errors: [],
//     success: "",
//   };

//   isFormValid = ({ email, password }) => email && password;

//   handleOnChange = (e) => {
//     this.setState({
//       [e.target.name]: [e.target.value],
//     });
//   };
//   handleOnSubmit = (e) => {
//     e.preventDefault();
//     let dataToSubmit = {
//       email: this.state.email,
//       password: this.state.password,
//     };

//     this.props.dispatch(loginUser(dataToSubmit)).then((response) => {
//       if (response.payload.success) {
//         this.setState({
//           success: response.payload.success,
//           payload: response.payload,
//         });
//       } else {
//         this.setState({
//           success: response.payload.success,
//           errors: this.state.errors.concat(response.payload.msg),
//         });
//       }
//     });
//   };

//   loggedInUser = () => {
//     if (this.state.success) {
//       if (this.state.payload.user.isAdmin) {
//         return <Redirect to="/" state={this.state} />;
//       }
//       return <Redirect to="/user/profile" />;
//     }
//   };
//   render() {

//   }
// }

// export default Login;
