import './NavbarBAS.css'
// import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function NavbarBAS() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top" fixed="top">
            <Navbar.Brand href="/home">Le Bac a Sable de Tristan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <NavDropdown title="Projets" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/testsjv">Tests de JV</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/hobbies">
                            Nerd hobbies
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

</Navbar>
    )
}

export default NavbarBAS