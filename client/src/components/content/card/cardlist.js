import React, { Component } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";

import ProductCard from "./card";

class CardList extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CardList;
