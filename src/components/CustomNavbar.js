import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import logoPic from '../images/RebelCowSm.jpg';



const CustomNavbar = () => {
    return  (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="justify-content-between">
                    <Navbar.Brand href="#home">
                        <Image src={logoPic} className="logo" fluid />
                    </Navbar.Brand>
                    <h3 className="profile-name px-4 mx-4 my-auto">Trista L. Pollard</h3>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-around ml-3 p-2 w-100">
                            <Nav.Link href="#about" className="nav-link px-2">About
                            </Nav.Link>
                            <Nav.Link href="#projects" className="nav-link px-2">Projects</Nav.Link>
                            <Nav.Link  href="#skills" className="nav-link px-2">Skills
                            </Nav.Link>
                            <Nav.Link href="#contacts" className="nav-link px-2">Contacts
                            </Nav.Link>.
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar;