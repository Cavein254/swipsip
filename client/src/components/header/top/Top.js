import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Col, Row, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

import "./top.scss";

const Top = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faGlassCheers} />
            Swit Sip
          </Navbar.Brand>
          <Row>
            <div className="top-wrapper">
              <Col sm={3}>
                <a href="/user/login">Login</a>
              </Col>
              <Col sm={3}>
                <a href="/user/register">Register</a>
              </Col>
              <Col sm={3}>
                <a href="/user/logout">Logout</a>
              </Col>
            </div>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Top;
