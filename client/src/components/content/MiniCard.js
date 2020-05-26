import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Products } from "../../context/DummyData";

const MiniCard = () => {
  const wine, beer, liquor, extras = []
  Products.map((product)=>{
    if(product.type === 'wine'){
      wine.push(product)
    }
  })
  return (
    <div>
      <Container>
        <Row>
          <Col>3 wine products</Col>
          {wine.map(item => {
            return(
              <ul key={item.id}>
                <li>{item.name}</li>
              </ul>
            )
          })}
          <Col>3 Liqour products</Col>
          <Col>3 Beer products</Col>
          <Col>3 Extras products</Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiniCard;
