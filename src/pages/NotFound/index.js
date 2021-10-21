import React from 'react'
import { Container } from 'react-bootstrap'
import CustomNav from '../../components/CustomNav'
import Sidebar from '../../components/Sidebar'

const NotFound = () => {
    return (
        <>
        
        <Sidebar/>
        <CustomNav/>

        <Container className='text-white mt-4 text-xl'>

        <h1>Error 404: Page not found</h1>
        <h2>Want to go <a href='./'>home</a> instead?</h2>
        </Container>
        </>
    )
}

export default NotFound
