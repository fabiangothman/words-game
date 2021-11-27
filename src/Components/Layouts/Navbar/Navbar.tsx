import {
	Navbar,
	Container,
	Nav,
	NavDropdown
} from 'react-bootstrap';
import { Link } from "react-router-dom";
//Styles
const NavBar = () => {

	return (
		<Navbar bg="white" variant="light" expand="lg" style={{borderBottom: '1px solid gray', }}>
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img src="/logo_black.png" height={35} alt="Planeo logo" />
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
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#">Perfil</NavDropdown.Item>
						<NavDropdown.Item href="#">Configuración</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#">Cerrar sesión</NavDropdown.Item>
					</NavDropdown>
				</Navbar.Collapse>				
			</Container>
		</Navbar>
	);
};
export default NavBar;