import React from 'react'
import CustomNav from '../../components/CustomNav'
import { Container } from 'react-bootstrap'
import Sidebar from '../../components/Sidebar'
import WavesBg from '../../components/WavesBg'
export default function index() {
    return (
        <div>
            <Sidebar/>
            <CustomNav/>
            <WavesBg/>
            <Container className = 'welcome-box h-screen text-center align-items-center'>

            <h2 className = 'text-xl'>github repos</h2>
            <h3 className = 'text-lg'>get information on any github users repos</h3>
            <p>&copy; Kushal, Velin, Brodie 2021</p>
            </Container>
        </div>
    )
}
