import React, { Component } from "react";
import { Container, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";

import Wine from "./admin/products/Wine";
import Beer from "./admin/products/Beer";

export default class Playground extends Component {
  state = {
    product_type: "",
  };
  onDropChange = (e) => {
    e.preventDefault();
    this.setState({
      product_type: e.target.name,
    });
  };
  handleStateChange = () => {
    console.log(this.state.product_type);
    console.log(this.state.product_type === "beer");
  };
  componentWillUpdate = () => {
    console.log("component updated");
    return <Wine />;
  };
  render() {
    this.handleStateChange();
    return (
      <div>
        <h1>Add Products</h1>
        <Row>
          <Col>
            <DropdownButton id="dropdown-basic" title="Category">
              <Dropdown.Item name="wine" onClick={this.onDropChange}>
                Wine
              </Dropdown.Item>
              <Dropdown.Item onClick={this.onDropChange} name="liqour">
                Liquor
              </Dropdown.Item>
              <Dropdown.Item onClick={this.onDropChange} name="beer">
                Beer
              </Dropdown.Item>
              <Dropdown.Item onClick={this.onDropChange} name="extras">
                Extras
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </div>
    );
  }
}
