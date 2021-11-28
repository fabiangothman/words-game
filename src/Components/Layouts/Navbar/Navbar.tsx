import {
	Navbar,
	Container,
	Nav,
	NavDropdown
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import ColoredText from '../../ColoredText/ColoredText';
//Styles
import styles from './NavBar.module.scss';

const NavBar = () => {

	return (
    <header id="header" className={styles.header}>
      <Navbar bg="black" variant="dark" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div className={styles.title}>
              <ColoredText text="¡JUEGO DE PALABRAS!" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link as={Link} to="/nomina_electronica" >Mi nómina electrónica</Nav.Link>
              <Nav.Link as={Link} to="/nueva_posicion" >Nueva posición</Nav.Link>
              <NavDropdown title="Mareigua SAS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#">Configuración</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Cerrar sesión</NavDropdown.Item>
              </NavDropdown>*/}
            </Nav>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Inicio</NavDropdown.Item>
              <NavDropdown.Item href="/about">Acerca</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>				
        </Container>
      </Navbar>
    </header>
	);
};
export default NavBar;