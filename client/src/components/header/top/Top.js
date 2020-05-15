import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Col, Row, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

import Login from "../../user/Login";
import Register from "../../user/Register";

import "./top.scss";

const Top = () => {
  return (
    <div>
      <Router>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#">
              <FontAwesomeIcon icon={faGlassCheers} />
              Swit Sip
            </Navbar.Brand>
            <Row>
              <Col sm={6}></Col>
              <div className="wrapper">
                <Col sm={3}>
                  <Link to="/login">Login</Link>
                </Col>
                <Col sm={3}>
                  <Link to="/register">Register</Link>
                </Col>
              </div>
            </Row>
          </Container>
        </Navbar>
      </Router>
    </div>
  );
};

export default Top;
