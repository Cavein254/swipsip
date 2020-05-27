import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBeer,
  faWineGlassAlt,
  faGlassWhiskey,
  faBacon,
} from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../context/ProductContext";
import SingleItem from "./singleItem";

const wine = [];
const liquor = [];
const extras = [];
const beer = [];

const ProductCategories = () => {
  const { products } = useContext(ProductContext);

  function CombineItems(collection, name, target) {
    collection.map((item) => {
      if (item.type == name) {
        target.push(item);
      }
      return target;
    });
  }

  // CombineItems(product, "wine", wine);
  // CombineItems(product, "liquor", liquor);
  // CombineItems(product, "extras", extras);
  // CombineItems(product, "beer", beer);

  // console.log(wine);
  // console.log(liquor);
  // console.log(beer);
  // console.log(extras);
  console.log("------------");
  console.log(products);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={3}>
            <h2>
              WINE <FontAwesomeIcon icon={faWineGlassAlt} />
            </h2>
            {wine.map((item) => {
              return (
                <div key={item.id}>
                  <SingleItem item={item} />
                  <hr />
                </div>
              );
            })}
          </Col>
          <Col sm={3}>
            <h2>
              BEERS <FontAwesomeIcon icon={faBeer} />
            </h2>
            {beer.map((item) => {
              return (
                <div key={item.id}>
                  <SingleItem item={item} />
                  <hr />
                </div>
              );
            })}
          </Col>
          <Col sm={3}>
            <h2>
              LIQUOR <FontAwesomeIcon icon={faGlassWhiskey} />
            </h2>
            {liquor.map((item) => {
              return (
                <div key={item.id}>
                  <SingleItem item={item} />
                  <hr />
                </div>
              );
            })}
          </Col>
          <Col sm={3}>
            <h2>
              Extras <FontAwesomeIcon icon={faBacon} />
            </h2>
            {extras.map((item) => {
              return (
                <div key={item.id}>
                  <SingleItem item={item} />
                  <hr />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductCategories;
