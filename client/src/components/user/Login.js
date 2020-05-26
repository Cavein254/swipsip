import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/User_actions";
import { Form, Button } from "react-bootstrap";
import "./user.scss";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail([...email, { email }]);
    setPassword([...password, { password }]);
  };

  return (
    <div className="Container form-data">
      {/* {this.loggedInUser()} */}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <code></code>
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
