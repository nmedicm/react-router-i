import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar expand='lg' className='bg-danger text-white'>
      <Container className='d-flex flex-md-row-reverse'>
        <NavbarBrand className='text-white'>Happy Cake 🍰</NavbarBrand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link className='text-white me-4 text-decoration-none' to='/'>🏠 Home</Link>
            <Link className='text-white text-decoration-none' to='/contact'>🟧 Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu