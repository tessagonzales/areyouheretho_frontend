import React from 'react';
import { Navbar } from 'reactstrap'

const Footer = () => {
  return(
    <div className='footer'>
      <Navbar className='navigation' style={{padding:'3%'}}>
        <p>&copy; 2018</p>
      </Navbar>
    </div>
  )
};

export default Footer;
