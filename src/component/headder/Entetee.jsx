import React from "react";
import "./Entetee.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Entetee = () => {
  return (
    <div className="II">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="AA">
            <Navbar.Brand href="#home">
              {" "}
              <img
                src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
                alt=""
                style={{
                  width: "250px",
                  height: "33px",
                }}
              />
            </Navbar.Brand>
          </div>
          <div className="SS">
            <div className="AA">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Abut us</Nav.Link>
                  <Nav.Link href="#link">Career</Nav.Link>
                  <NavDropdown title="Departments" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Marketing & PR
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Costumor,Success & Sales
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      IT,Product,Data
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Finance & Administration
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">
                      HR & more
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Entetee;
