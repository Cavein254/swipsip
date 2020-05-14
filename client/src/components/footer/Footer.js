import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Container>
          <Row>
            <Col sm={2}>
              <h4>VISIT US</h4>
              <p>Switsip Wine & Spirits</p>
              <p>Kasarani Seasons</p>
              <p>info@switsip.co.ke</p>
            </Col>
            <Col sm={2}>
              <h4>HOURS OF OPERATIONS</h4>
              <p>Mon-Sun</p>
              <p>8:00 am - 11:00pm</p>
            </Col>
            <Col sm={2}>
              <h4>COMPANY</h4>
              <p>
                <a href="#">About Us</a>
              </p>
            </Col>
            <Col sm={2}>
              <h4>SOCIAL</h4>
              <p>
                <FontAwesomeIcon icon={faFacebook} /> Twitter
              </p>
              <p></p>
            </Col>
            <Col sm={2}>
              <h4>LEGAL</h4>
            </Col>
            <Col sm={2}>
              <h4>BLOG</h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="ending">
        <p>&copy; SwitSip Wine Agencies</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
