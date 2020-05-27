import React, { Component } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { faCartPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.scss";

const ProductCard = () => {
  return (
    <>
      <Card style={{ width: "18rem", margin: "10px 10px" }}>
        <Card.Title>Card Title</Card.Title>
        <Card.Body>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Button className="empty-cart">
            <FontAwesomeIcon icon={faCartPlus} />
          </Button>
          <Button className="checkout">
            <FontAwesomeIcon icon={faCartPlus} />
            <span> </span>Add to Cart
          </Button>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
