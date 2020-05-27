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
            <Col sm={2} className="item">
              <h5>VISIT US</h5>
              <p>Switsip Wine & Spirits</p>
              <p>Kasarani Seasons</p>
              <p>info@switsip.co.ke</p>
            </Col>
            <Col sm={2} className="item">
              <h5>HOURS OF OPERATIONS</h5>
              <p>Mon-Sun</p>
              <p>8:00 am - 11:00pm</p>
            </Col>
            <Col sm={2} className="item">
              <h5>COMPANY</h5>
              <p>
                <a href="#">About Us</a>
              </p>
            </Col>
            <Col sm={2} className="item">
              <h5>SOCIAL</h5>
              <p>
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </p>
              <p></p>
            </Col>
            <Col sm={2} className="item">
              <h5>LEGAL</h5>
            </Col>
            <Col sm={2} className="item">
              <h5>BLOG</h5>
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
