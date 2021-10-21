import React from 'react'
import { Container } from 'react-bootstrap'
import CustomNav from '../../components/CustomNav'
import Sidebar from '../../components/Sidebar'
import WavesBg from '../../components/WavesBg'

const About = () => {
    return (
        <>
       
        <Sidebar/>
        <CustomNav/>
        <WavesBg/>
        <Container className='text-white'>

        <h1>about here</h1>
        </Container>
        </>
    )

}

export default About
