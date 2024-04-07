import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar'; 
import linkedin from '../assert/linkedin.png';
import instagram from '../assert/instagram.png';
import Github from '../assert/Github.png';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <NavbarBootstrap bg="light" data-bs-theme="light">
            <Container>
                <NavbarBootstrap.Brand href=""></NavbarBootstrap.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="https://www.linkedin.com/in/aryan-mohammadi/">
                        <img src={linkedin} alt="linkedin" />
                    </Nav.Link>

                    <Nav.Link href="https://www.instagram.com/aryan.m.1380/">
                        <img src={instagram} alt="instagram" />
                    </Nav.Link>

                    <Nav.Link href="https://github.com/AryanM1380">
                        <img src={Github} alt="Github" />
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBootstrap>
    );
};

export default Navbar;
