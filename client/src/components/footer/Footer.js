import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>VISIT US</h2>
          </Col>
          <Col>
            <h2>HOURS OF OPERATIONS</h2>
          </Col>
          <Col>
            <h2>COMPANY</h2>
          </Col>
          <Col>
            <h2>SOCIAL</h2>
          </Col>
          <Col>
            <h2>LEGAL</h2>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <div>
        <p>&Copy; SwitSip Wine Agencies</p>
      </div>
    </div>
  );
};

export default Footer;
