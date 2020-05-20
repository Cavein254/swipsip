import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const MiniCard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>3 wine products</Col>
          <Col>3 Liqour products</Col>
          <Col>3 Beer products</Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiniCard;
