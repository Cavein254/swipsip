import { Row, Col } from "react-bootstrap";
import React from "react";

const SingleItem = ({ item }) => {
  return (
    <Row>
      <Col>
        {item.name} ksh {item.price}/=
      </Col>
    </Row>
  );
};

export default SingleItem;
