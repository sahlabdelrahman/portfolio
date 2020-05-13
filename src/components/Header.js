import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

function Header () {
    return (
        <Fragment>
            <Navbar className="border-bottom" bg="transpatent" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/"><span>S</span>AHL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default Header;