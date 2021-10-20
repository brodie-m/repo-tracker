import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
export default function CustomNav() {
    return (
        <Navbar bg='dark'>
            <Container>
                <Navbar.Brand href='/' className = 'text-white'>github repos</Navbar.Brand>
                <Nav.Link href = '/'>home</Nav.Link>
                <Nav.Link href = '/repos'>repos</Nav.Link>
            </Container>
        </Navbar>
    )
}
