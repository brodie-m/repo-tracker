import React from 'react'
import CustomNav from '../../components/CustomNav'
import Sidebar from '../../components/Sidebar'
import { Container } from 'react-bootstrap'
const Contact = () => {
    return (
        <>
        <Sidebar/>
        <CustomNav/>
        <Container className='text-white'>

        <h1>contact here</h1>
        </Container>
        </>
    )
}

export default Contact
