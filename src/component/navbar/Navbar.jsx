import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <Navbar className ="text-danger" >
      <Container>
        <Navbar.Brand href="/">AnaSayfa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between">
            <Link to ="/Login">Login</Link>
            <Link to ="/Üyeler">Üyeler</Link>
            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1