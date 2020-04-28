import React from "react";

import { Container, Col, Row, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlassCheers,
  faSignInAlt,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faGlassCheers} />
            Swit Sip
          </Navbar.Brand>
          <Col>
            <Row sm={8}></Row>
            <Row sm={4}>
              <span>
                <a href="#">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </a>{" "}
                |
              </span>
              <span>
                <a href="#">
                  Register <FontAwesomeIcon icon={faPenFancy} />
                </a>
              </span>
            </Row>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
};

export default Login;
