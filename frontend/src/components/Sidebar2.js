import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Sidebar2() {
  const [showOffcanvas, setShowOffcanvas] = useState(window.innerWidth < 768);

  // Function to handle click on Toggle button
  const handleToggleClick = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  // Function to close Offcanvas
  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  // Function to handle window resize
  const handleResize = () => {
    setShowOffcanvas(window.innerWidth < 768);
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener when component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <>
      <Button
        variant="primary"
        onClick={handleToggleClick}
        style={{ marginBottom: "1rem" }}
      >
        Open Offcanvas
      </Button>
      <Offcanvas
        show={showOffcanvas}
        onHide={handleOffcanvasClose}
        scroll // Use scroll prop directly
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar2;