import React from "react";
import { Container, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <DropdownButton id="dropdown-basic" title="WINE">
              <Dropdown.Item href="#/action-1">White Wine</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Red Wine</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Spakling Wine</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton id="dropdown-basic" title="BEER">
              <Dropdown.Item href="#/action-1">Local</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Imported</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton id="dropdown-basic" title="LIQUOR">
              <Dropdown.Item href="#/action-1">Scotch</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Gin</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Vodka</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tequilla</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Whiskey</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Vodka</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Brandy</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Cognac</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton id="dropdown-basic" title="EXTRAS">
              <Dropdown.Item href="#/action-1">Cigarrattes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Soft Drinks</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Water</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigation;
