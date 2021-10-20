import React from 'react'
import { Container } from 'react-bootstrap'
import CustomNav from '../../components/CustomNav'
import InputForm from '../../components/InputForm'
import Results from '../../components/Results'
export default function index() {
    return (
        <div>
            <CustomNav/>
            <Container className = 'd-flex flex-column justify-content-center'>
            <InputForm/>
            </Container>
        </div>
    )
}
