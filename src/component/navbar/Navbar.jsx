import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import NavbarStyle from "./navbar.module.css"

const Navbar1 = () => {
  return (
    <Nav className="justify-content-center mt-3" activeKey="/">
    <Nav.Item className={NavbarStyle['nav-item']}>
      <Link className={NavbarStyle['nav-item-link']} to="/">Anasayfa</Link>
    </Nav.Item>
    <Nav.Item className={NavbarStyle['nav-item']}>
      <Link className={NavbarStyle['nav-item-link']} to="/login">Login</Link>
    </Nav.Item>
    <Nav.Item className={NavbarStyle['nav-item']}>
      <Link className={NavbarStyle['nav-item-link']} to="/ekip">Ekip</Link>
    </Nav.Item>
    
  </Nav>
  )
}

export default Navbar1