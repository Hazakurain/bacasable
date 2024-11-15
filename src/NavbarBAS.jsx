import './NavbarBAS.css'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";


function NavbarBAS() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">

            <Navbar.Brand href="#home">Le Bac a Sable de Tristan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link activeStyle={{}}  as={Link} to="/portfolio">Portfolio</Nav.Link>
                    <NavDropdown title="Projets" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Tests de JV</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">
                            Nerd hobbies
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

</Navbar>
    )
}

export default NavbarBAS