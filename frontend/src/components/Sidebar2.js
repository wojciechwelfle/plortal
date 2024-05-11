//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react'; // Import React
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Sidebar2.css'
import { Container } from 'react-bootstrap';



function SidebarMenu(){
  return(
    <div className='container-fluid' >
      <div className='row'>
        
        <div className='Nav col-auto col-md-2 min-vh-100 d-flex justify-content flex-column'>
          
          <Container className='text-decoration-none text-white d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2'>
              <span className='Info ms-1 fs-4'>PŁortal</span>
          </Container>
          
          <ul class="nav nav-pills flex-column">
          <li class="nav-item text-white fs-4 my-2">
              <i className='bi bi-grid'></i>
              <span className='Info ms-2 d-none d-sm-inline'>Menu</span>
            </li>
            <li class="nav-item text-white fs-4 my-2 d-grid gap-2">
              <Button className='Btn' variant='null' href="#" class="nav-link text-white active" aria-current="page">
              <i className='bi bi-house'></i>
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
        </div> 
  )
}

export default SidebarMenu
 