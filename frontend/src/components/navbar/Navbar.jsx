import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoutButton from '../LogoutButton';
import './Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
//import { NavbarOffcanvas } from 'react-bootstrap';

const NavigationBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(true); // Stan śledzący czy Offcanvas jest otwarty
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowOffcanvas(true); // Otwórz Offcanvas na większych ekranach
      } else {
        setShowOffcanvas(false); // Zamknij Offcanvas na mniejszych ekranach
      }
    };

    window.addEventListener('resize', handleResize); // Dodaj nasłuchiwanie zdarzenia zmiany rozmiaru ekranu

    // Sprawdź szerokość ekranu przy załadowaniu strony
    handleResize();

    return () => window.removeEventListener('resize', handleResize); // Usuń nasłuchiwanie zdarzenia zmiany rozmiaru ekranu po odmontowaniu komponentu
  }, []);
  return (
    <>
      <Navbar key={false} expand={false} className="bg-body-tertiary mb-3" id="navibar">
        <Container fluid>
          <Navbar.Brand href="#">PŁortal</Navbar.Brand>
          <Navbar.Toggle id="btn" variant="dark" aria-controls={`offcanvasNavbar-expand-false`} onClick={() => setShowOffcanvas(true)}/>
          <LogoutButton id="logout-btn"></LogoutButton>
          
          <Offcanvas
            show={showOffcanvas} // Ustawienie Offcanvas na domyślnie otwarty
            onHide={() => setShowOffcanvas(false)} // Funkcja do zamknięcia Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
          >
            <Offcanvas.Header closeButton >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                PŁortal
              </Offcanvas.Title>
            </Offcanvas.Header>
              <Offcanvas.Body scroll>
      <div className='row'>
          <ul class="nav nav-pills flex-column ">
          <li class="nav-item my-3">
              <i className='bi bi-grid'></i>
              <span className='Info ms-2 d-sm-inline'>Menu</span>
            </li>
            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='dark' href="/news" class="nav-link text-white active" aria-current="page">
              <i id="iconss" className='bi bi-house'></i>
              <span className='ms-2 d-none d-sm-inline'>Strona Główna</span>
              </Button>
            </li>
            
            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='dark' href="#" class="nav-link text-white active" aria-current="page" deco>
              <i className='bi bi-person'></i>
              <span className='ms-2 d-none d-sm-inline'>Wykładowcy</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='dark' href="/map" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-pin-map'></i>
              <span className='ms-2 d-none d-sm-inline'>Mapa PŁ</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='dark' href="#" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-file-spreadsheet'></i>
              <span className='ms-2 d-none d-sm-inline'>Plan zajęć</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='dark' href="#" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-book-half'></i>
              <span className='ms-2 d-none d-sm-inline'>Przedmioty</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-1 d-grid gap-2">
              <Button className='Btn' variant='dark' href="/schedule" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-calendar'></i>
              <span className='ms-2 d-none d-sm-inline'>Terminarz</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-1 d-grid gap-2">
              <Button className='Btn' variant='dark' href="/facility" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-person-wheelchair'></i>
              <span className='ms-2 d-none d-sm-inline'>Udogodnienia</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-1 d-grid gap-2">
              <Button className='Btn' variant='dark' href="#" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-gear'></i>
              <span className='ms-2 d-none d-sm-inline'>Ustawiena</span>
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
}
export default NavigationBar;
