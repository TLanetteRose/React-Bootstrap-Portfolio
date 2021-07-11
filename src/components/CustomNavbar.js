import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';

import logoPic from '../images/RebelCowSm.jpg';



const CustomNavbar = () => {
    return  (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={logoPic} className="logo" fluid />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link}href="#about" className="nav-link">About
                            </Nav.Link>
                            <Nav.Link as={Link} href="#projects" className="nav-link">Projects</Nav.Link>
                            <Nav.Link as={Link} href="#skills" className="nav-link">Skills
                            </Nav.Link>
                            <Nav.Link as={Link} href="#contacts" className="nav-link">Contacts
                            </Nav.Link>.
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar;