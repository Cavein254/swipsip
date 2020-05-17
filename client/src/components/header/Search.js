import React from "react";
import { Container, Col, Row, Image, Form } from "react-bootstrap";
import Logo from "./imgs/sipwine.png";

const Search = () => {
  return (
    <div>
      <Container className="logo">
        <Row>
          <Col sm={4} className="logo-picture">
            <Image src={Logo} alt="Logo" />
          </Col>
          <Col sm={8} className="logo-text">
            <Form.Control placeholder="Search" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
