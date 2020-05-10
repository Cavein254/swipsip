import React from "react";

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
            <Col sm={6}></Col>
            <div className="wrapper">
              <Col sm={3}>
                <div>
                  <a href="#">Register</a>
                </div>
              </Col>
              <Col sm={3}>
                <div>
                  <a href="#">Login</a>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Top;
