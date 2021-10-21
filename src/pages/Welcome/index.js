import React from 'react'
import CustomNav from '../../components/CustomNav'
import { Container } from 'react-bootstrap'
import Sidebar from '../../components/Sidebar'
export default function index() {
    return (
        <div>
            <Sidebar/>
            <CustomNav/>
            <Container className = 'd-flex justify-content-center flex-column mt-5 text-white'>

            <h2 className = ''>github repos</h2>
            <h3>get information on any github users repos</h3>
            <p>&copy; Kushal, Velin, Brodie 2021</p>
            </Container>
        </div>
    )
}
