import React from 'react';
import { Navbar, NavbarBrand, NavItem, Nav } from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
  <div>
    <Navbar className="navigation" style={{padding:'3%'}}>
        <NavbarBrand><p style={{fontSize:'50px'}}>ARE<b>YOU</b>HERETHO</p></NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/" className='link-style'> Check-in </Link>
            <Link to="/1" className='link-style'>Gonzo's</Link>
            <Link to="/2" className='link-style'>Manhattons</Link>
            <Link to="/3" className='link-style'>Barrio's</Link>
            <Link to="/vjwHRglLqt" className='link-style'>Bar Login</Link>
          </NavItem>
        </Nav>
    </Navbar>
  </div>
  )
};

export default Header;
