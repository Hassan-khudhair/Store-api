import React from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap'

const NavbarLogin = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Laptop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link href="/" className='d-flex ms-2'><i className="gg-shopping-cart"></i> Cart </Nav.Link>
                        <Nav.Link href="/login" className='d-flex ms-4'><i className="gg-log-in"></i> &nbsp; &nbsp;Log in</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-1"
                            aria-label="Search"
                            style={{ width: '365px', backgroundColor: '#2e91af4b' }}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarLogin