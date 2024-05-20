import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoutButton from "../LogoutButton";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavigationBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowOffcanvas(true);
      } else {
        setShowOffcanvas(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Navbar
        key={false}
        expand={false}
        className="bg-body-tertiary mb-3"
        id="navibar"
      >
        <Container fluid>
          <Navbar.Brand href="#">PŁortal</Navbar.Brand>
          <Navbar.Toggle
            id="btn"
            aria-controls={`offcanvasNavbar-expand-false`}
            onClick={() => setShowOffcanvas(true)}
          />
          <LogoutButton id="logout-btn"></LogoutButton>

          <Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            backdrop={true}
            scroll={true}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                PŁortal
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body scroll>
              <div className="row">
                <ul className="nav nav-pills flex-column ">
                  <li
                    id="menulabel"
                    className="nav-item fs-4 d-grid my-2 gap-2"
                  >
                    <i className="bi bi-grid"></i>
                    <span className="Info ms-2 d-sm-inline">Menu</span>
                  </li>
                  <li className="nav-item fs-4 my-2 d-grid gap-2">
                    <Button
                      className={`navibutton ${
                        window.location.pathname === "/news" ? "hovered" : null
                      }`}
                      href="/news"
                      variant="null"
                      aria-current="page"
                    >
                      <i className="bi bi-house"></i>
                      <span className="ms-2 d-sm-inline">Strona Główna</span>
                    </Button>
                  </li>

                  <li className="nav-item fs-4 my-2 d-grid gap-2">
                    <Button
                      className={`navibutton ${
                        window.location.pathname === "/lecturers"
                          ? "hovered"
                          : null
                      }`}
                      href="#"
                      variant="null"
                      aria-current="page"
                    >
                      <i className="bi bi-person"></i>
                      <span className="ms-2 d-sm-inline">Wykładowcy</span>
                    </Button>
                  </li>

                  <li className="nav-item fs-4 my-2 d-grid gap-2">
                    <Button
                      className={`navibutton ${
                        window.location.pathname === "/map" ? "hovered" : null
                      }`}
                      href="/map"
                      variant="null"
                      aria-current="page"
                    >
                      <i className="bi bi-pin-map"></i>
                      <span className="ms-2 d-sm-inline">Mapa PŁ</span>
                    </Button>
                  </li>

                  <li className="nav-item fs-4 my-2 d-grid gap-2">
                    <Button
                      className={`navibutton ${
                        window.location.pathname === "/school-schedule"
                          ? "hovered"
                          : null
                      }`}
                      href="#"
                      variant="null"
                      aria-current="page"
                    >
                      <i className="bi bi-file-spreadsheet"></i>
                      <span className="ms-2 d-sm-inline">Plan zajęć</span>
                    </Button>
                  </li>

                  <li className="nav-item fs-4 my-2 d-grid gap-2">
                    <Button
                      className={`navibutton ${
                        window.location.pathname === "/subjects"
                          ? "hovered"
                          : null
                      }`}
                      href="#"
                      variant="null"
                      aria-current="page"
                    >
                      <i className="bi bi-book-half"></i>
                      <span className="ms-2 d-sm-inline">Przedmioty</span>
                    </Button>
                  </li>

                  <li className="nav-item fs-4 my-1 d-grid gap-2">
                    <Button
                      className={`navibutton ${
                        window.location.pathname === "/schedule"
                          ? "hovered"
                          : null
                      }`}
                      href="/schedule"
                      variant="null"
                      aria-current="page"
                    >
                      <i className="bi bi-calendar"></i>
                      <span className="ms-2 d-sm-inline">Terminarz</span>
                    </Button>
                  </li>

                  <li className="nav-item fs-4 my-1 d-grid gap-2">
                    <Button
                      className={`navibutton ${
                        window.location.pathname === "/facility"
                          ? "hovered"
                          : null
                      }`}
                      href="/facility"
                      variant="null"
                      aria-current="page"
                    >
                      <i className="bi bi-person-wheelchair"></i>
                      <span className="ms-2 d-sm-inline">Udogodnienia</span>
                    </Button>
                  </li>

                  <li className="nav-item  fs-4 my-1 d-grid gap-2">
                    <Button
                      className={`navibutton ${
                        window.location.pathname === "/settings"
                          ? "hovered"
                          : null
                      }`}
                      href="/settings"
                      variant="null"
                      aria-current="page"
                    >
                      <i className="bi bi-gear"></i>
                      <span className="ms-2 d-sm-inline">Ustawienia</span>
                    </Button>
                  </li>
                </ul>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
