import React from 'react'
import Form from '../components/Form'
import { Container } from '../styles/styledElements'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <Container>
      <Link to={'/employeelist'}>view employee list</Link>
      <Form />
    </Container>
  )
}
