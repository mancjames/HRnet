import React from 'react'
import { Title } from '../styles/styledElements'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const { pathname } = useLocation()


    if (pathname === '/'){
        return (
            <Title>
                <h1>HRnet</h1>
            </Title>
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
