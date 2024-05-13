import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoutButton from '../LogoutButton';
import './Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const NavigationBar = () => {
  return (
    <>
      
        <Navbar key={false} expand={false} className="bg-body-tertiary mb-3" id="navibar">
          <Container fluid>
            <Navbar.Brand href="#">PŁortal</Navbar.Brand>
            <Navbar.Toggle id="btn" variant="dark" aria-controls={`offcanvasNavbar-expand-false`} />
            <LogoutButton id="logout-btn"></LogoutButton>
            <Navbar.Offcanvas
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
              <Button className='Btn' variant='null' href="/news" class="nav-link text-white active" aria-current="page">
              <i id="iconss" className='bi bi-house'></i>
              <span className='ms-2 d-none d-sm-inline'>Strona Główna</span>
              </Button>
            </li>
            
            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='null' href="#" class="nav-link text-white active" aria-current="page" deco>
              <i className='bi bi-person'></i>
              <span className='ms-2 d-none d-sm-inline'>Wykładowcy</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='null' href="/map" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-pin-map'></i>
              <span className='ms-2 d-none d-sm-inline'>Mapa PŁ</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='null' href="#" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-file-spreadsheet'></i>
              <span className='ms-2 d-none d-sm-inline'>Plan zajęć</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='null' href="#" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-book-half'></i>
              <span className='ms-2 d-none d-sm-inline'>Przedmioty</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-1 d-grid gap-2">
              <Button className='Btn' variant='null' href="/schedule" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-calendar'></i>
              <span className='ms-2 d-none d-sm-inline'>Terminarz</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-1 d-grid gap-2">
              <Button className='Btn' variant='null' href="/facility" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-person-wheelchair'></i>
              <span className='ms-2 d-none d-sm-inline'>Udogodnienia</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-1 d-grid gap-2">
              <Button className='Btn' variant='null' href="#" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-gear'></i>
              <span className='ms-2 d-none d-sm-inline'>Ustawiena</span>
              </Button>
            </li>

          </ul>
          </div>
        
        
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default NavigationBar;
