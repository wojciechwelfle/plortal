//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react'; // Import React
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';

function SidebarMenu(){
  return(
    <div className='container-fluid' >
      <div className='row'>
        <div className='bg-dark col-auto col-md-3 min-vh-100'>
          
          <Button className='text-decoration-none text-white d-flex align-itemcenter'>
            <i className='fs-4 bi bi-speedometer'></i>
              <span className='ms-1 fs-4'>Brand</span>
          </Button>
          <ButtonGroup vertical>
          <ul class="nav nav-pills flex-column">
            <li class="nav-item text-white fs-4">
              <Button href="#" class="nav-link text-white active d-grid gap-2" aria-current="page" size="lg">Link</Button>
              <i className='bi bi-speedometer2'></i>
              <span className='ms-2'>Dashboard</span>
            </li>
            <li class="nav-item text-white fs-4">
              <Button href="#" class="nav-link text-white active d-grid gap-2" aria-current="page">
              <i className='bi bi-grid'></i>
              <span className='ms-2'>Home</span>
              </Button>
            </li>
            <li class="nav-item text-white fs-4">
              <Button href="#" class="nav-link text-white active d-grid gap-2" aria-current="page" >
              <i className='bi bi-table'></i>
              <span className='ms-2'>Orders</span>
              </Button>
            </li>


          </ul>
          </ButtonGroup>
        </div>
        </div> 
    </div>
  )
}

export default SidebarMenu
 