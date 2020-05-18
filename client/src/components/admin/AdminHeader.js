import React from "react";
import { Container, Col, Row, Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassCheers, faLock } from "@fortawesome/free-solid-svg-icons";

const AdminHeader = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark" className="admintop">
        <Container>
          <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faGlassCheers} />
            Swit Sip
          </Navbar.Brand>
          <Row>
            <Col sm={6}></Col>
            <div className="wrapper">
              <Col sm={6}>
                <Button>
                  <span>
                    <FontAwesomeIcon icon={faLock} /> Logout
                  </span>
                </Button>
              </Col>
            </div>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminHeader;
