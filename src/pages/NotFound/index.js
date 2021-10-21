import React from 'react'
import { Container } from 'react-bootstrap'
import CustomNav from '../../components/CustomNav'
import Sidebar from '../../components/Sidebar'

const NotFound = () => {
    return (
        <>
        
        <Sidebar/>
        <CustomNav/>

        <Container>
        <h1>error 404: not found</h1>

        </Container>
        </>
    )
}

export default NotFound
