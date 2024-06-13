import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoutButton from "../LogoutButton";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FilterButton from "../map/FilterButton";
import { userRole } from "../../routes/userAuthorization";
import logo from "../../logo2.png";

const NavigationBar = ({
  selectedRestaurants,
  setSelectedRestaurants,
  selectedParks,
  setSelectedParks,
  selectedBuildings,
  setSelectedBuildings,
}) => {
  const [showOffcanvas, setShowOffcanvas] = useState(true);

  const isUserAdmin = userRole() === "ADMIN";

  const offcanvasItems = [
    {
      pathname: "/news",
      title: "Strona Główna",
      icon: "bi bi-house",
    },
    {
      pathname: "/profile",
      title: "Profil Użytkownika",
      icon: "bi bi-person",
    },
    {
      pathname: "/map",
      title: "Mapa PŁ",
      icon: "bi bi-pin-map",
    },
    {
      pathname: "/plan",
      title: "Plan zajęć",
      icon: "bi bi-file-spreadsheet",
    },
    {
      pathname: "/courses",
      title: "Przedmioty",
      icon: "bi bi-book-half",
    },
    {
      pathname: "/schedule",
      title: "Terminarz",
      icon: "bi bi-calendar",
    },
    {
      pathname: "/facility",
      title: "Udogodnienia",
      icon: "bi bi-person-wheelchair",
    },
    {
      pathname: "/settings",
      title: "Ustawienia",
      icon: "bi bi-gear",
    },
  ];

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
          <Navbar.Brand href="/news">
            <img src={logo} alt="Logo" className="logoImg" />
          </Navbar.Brand>
          <Navbar.Toggle
            id="btn"
            aria-controls={`offcanvasNavbar-expand-false`}
            onClick={() => setShowOffcanvas(true)}
          />
          <div className="nav-buttons-container">
            {window.location.pathname === "/map" && (
              <FilterButton
                id="filter-button"
                selectedRestaurants={selectedRestaurants}
                setSelectedRestaurants={setSelectedRestaurants}
                selectedParks={selectedParks}
                setSelectedParks={setSelectedParks}
                selectedBuildings={selectedBuildings}
                setSelectedBuildings={setSelectedBuildings}
              />
            )}
            <LogoutButton id="logout-btn" />
          </div>
          <Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            backdrop={true}
            scroll={true}
          >
            <Offcanvas.Header closeButton className="offcanvas-header">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                <img src={logo} alt="Logo" className="logoImg2" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="row">
                <ul className="nav nav-pills flex-column ">
                  <li
                    id="menulabel"
                    className="nav-item fs-4 d-grid my-2 gap-2"
                  >
                    <i className="bi bi-grid"></i>
                    <span className="Info ms-2 d-sm-inline">Menu</span>
                  </li>

                  {offcanvasItems.map((item, i) => {
                    return (
                      <li className="nav-item fs-4 my-2 d-grid gap-2">
                        <Button
                          className={`navibutton ${
                            window.location.pathname === item.pathname
                              ? "hovered"
                              : null
                          }`}
                          href={item.pathname}
                          variant="null"
                          aria-current="page"
                          disabled={item.disabled}
                        >
                          <i className={`bi ${item.icon}`}></i>
                          <span className="ms-2 d-sm-inline">{item.title}</span>
                        </Button>
                      </li>
                    );
                  })}

                  {isUserAdmin && (
                    <li className="nav-item fs-4 my-2 d-grid gap-2">
                      <Button
                        className={`navibutton ${
                          window.location.pathname === "admin"
                            ? "hovered"
                            : null
                        }`}
                        href="admin"
                        variant="null"
                        aria-current="page"
                      >
                        <i className="bi bi-person-fill-lock"></i>
                        <span className="ms-2 d-sm-inline">Admin</span>
                      </Button>
                    </li>
                  )}
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
