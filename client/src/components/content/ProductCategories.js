import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBeer,
  faWineGlassAlt,
  faGlassWhiskey,
} from "@fortawesome/free-solid-svg-icons";

function ProductCategories() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}>
            <h2>
              WINE <FontAwesomeIcon icon={faWineGlassAlt} />
            </h2>
            Three Wine Products
          </Col>
          <Col sm={4}>
            <h2>
              BEERS <FontAwesomeIcon icon={faBeer} />
            </h2>
            Three Wine Products
          </Col>
          <Col sm={4}>
            <h2>
              LIQUOR <FontAwesomeIcon icon={faGlassWhiskey} />
            </h2>
            Three Wine Products
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductCategories;
