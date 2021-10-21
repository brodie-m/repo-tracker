import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CustomNav from '../../components/CustomNav'
import InputForm from '../../components/InputForm'
import { getResult } from '../../actions'
export default function Repos() {
    const dispatch = useDispatch();
    const results = useSelector(state => state.results)
    const search = searchTerm => dispatch(getResult(searchTerm))
    return (
        <div>
            <CustomNav/>
            <Container className = 'd-flex flex-column justify-content-center'>
            <InputForm getResult={search} results={results}/>
            </Container>
        </div>
    )
}
