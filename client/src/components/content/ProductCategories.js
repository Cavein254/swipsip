import React, { useContext, useEffect } from "react";
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
  const allProducts = products.products


  function CombineItems(collection, name, target) {
    collection.map((item) => {
      if (item.type == name) {
         target.push(item);
      }
    });
  }

  useEffect(()=> {
    CombineItems(allProducts, 'wine', wine)
  CombineItems(allProducts, 'liquor', liquor)
  CombineItems(allProducts, 'extras', extras)
  CombineItems(allProducts, 'beer', beer)
  }, [])

  
  // console.log(allProducts)
  console.log(beer)
  console.log(wine)

  
  return (
    <div>
      <Container>
        <Row>
          <Col sm={3}>
            <h4>
              WINE <FontAwesomeIcon icon={faWineGlassAlt} />
            </h4>
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
            <h4>
              BEERS <FontAwesomeIcon icon={faBeer} />
            </h4>
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
            <h4>
              LIQUOR <FontAwesomeIcon icon={faGlassWhiskey} />
            </h4>
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
            <h4>
              Extras <FontAwesomeIcon icon={faBacon} />
            </h4>
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
