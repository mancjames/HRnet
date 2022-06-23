import React from 'react'
import { Title, Container } from '../styles/styledElements'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {
    const { pathname } = useLocation()


    if (pathname === '/'){
        return (
            <>
            <Container>
                <h1>HRnet</h1>
                <Link to={'/employeelist'}>View Current Employees</Link>
                <h1>Create Employee</h1>
            </Container>
            </>
          )
    }
    if (pathname === '/employeelist'){
        return (
            <Title>
                <h1>Current Employees</h1>
            </Title>
          )
    }
}
