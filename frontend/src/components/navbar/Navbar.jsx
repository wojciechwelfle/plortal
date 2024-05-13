import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'

const NavigationBar = () => {
  return (
    <>
      <div id="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus beatae reprehenderit distinctio ipsa corrupti repudiandae repellat dolore rerum, culpa praesentium quisquam earum ex, eos mollitia! Dolor dignissimos ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas optio provident repudiandae in officia, voluptatum labore magnam error fuga iste. Eius, non. Cumque atque tenetur sed natus explicabo molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti porro temporibus inventore placeat, quo minus nisi magni nulla tempore dolore laborum non expedita error nam consequatur illo dicta accusamus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima ab dicta rem numquam ipsa doloribus eveniet ea sunt! Distinctio tenetur totam repellendus nesciunt accusantium reiciendis iste provident asperiores ex!</div>
        <Navbar key={false} expand={false} className="bg-body-tertiary mb-3" id="navibar">
          <Container fluid>
            <Navbar.Brand href="#">PŁortal</Navbar.Brand>
            <Navbar.Toggle id="btn" aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              scroll
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body scroll>
              <div className='container-fluid' >
      <div className='row'>
          <ul class="nav nav-pills flex-column">
          <li class="nav-item text-white fs-4 my-2">
              <i className='bi bi-grid'></i>
              <span className='Info ms-2  d-sm-inline'>Menu</span>
            </li>
            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='null' href="#" class="nav-link text-white active" aria-current="page">
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
              <Button className='Btn' variant='null' href="#" class="nav-link text-white active" aria-current="page">
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
              <Button className='Btn' variant='null' href="#" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-calendar'></i>
              <span className='ms-2 d-none d-sm-inline'>Terminarz</span>
              </Button>
            </li>

            <li class="nav-item text-white fs-4 my-1 d-grid gap-2">
              <Button className='Btn' variant='null' href="#" class="nav-link text-white active" aria-current="page">
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
        </div>
        
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default NavigationBar;
/*
<Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-false`}
                  >
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
 
*/