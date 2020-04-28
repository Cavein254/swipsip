import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function ProductCategories() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>WINE</h2>
            Three Wine Products
          </Col>
          <Col>
            <h2>BEERS</h2>
            Three Wine Products
          </Col>
          <Col>
            <h2>LIQUOR</h2>
            Three Wine Products
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductCategories;
