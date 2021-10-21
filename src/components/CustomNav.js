import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
export default function CustomNav() {
    return (
        <Navbar className='bg-gray-900 text-white shadow-lg'>
            <Container>
                <Navbar.Brand href='/' className = 'text-white'>
                    <p>
                        <b>github repos</b> - get information on any user's github repos</p>
                    
                    </Navbar.Brand>
                
            </Container>
        </Navbar>
    )
}
