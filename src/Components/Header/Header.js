import React, { useState } from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css'
import { FaAlignLeft, FaAngleDown, FaAngleUp } from "react-icons/fa";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

  


  return (
   <div className='border-bottom'>
          <div className="heads ">
          <Container >
        <Row>
        <Col xs={6} md={4} className=" header_content1" >
        {/* <div >
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
       <FaAlignLeft />
        <span className="ms-5 f_content">Browse Categories</span>
        <FaAngleDown className="ms-5"/>
      </span>
      {showDropdown && (
        <ul className='list-block mt-5 catgory_list '>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Monitors</a></li>
                <li><a href="#">Printers</a></li>
        </ul>
      )}
    </div> */}

    <ul className="leftside-ul">
     
     <li>
      
         <a href="#"> <span><FaAlignLeft className="lll" /> </span> Products <span><FaAngleDown className="ms-5 down"/> </span></a>
         <ul class="dropdown">
             <li><a href="#">Laptops</a></li>
             <li><a href="#">Monitors</a></li>
             <li><a href="#">Printers</a></li>
         </ul>
     </li>
   
      </ul>

        </Col>
        <Col xs={6} md={4}>
        <Navbar className="navslist" >
        <Container >
          <Nav className="me-auto">
            <Nav.Link href="#home" className='f_size'>Home</Nav.Link>
            <Nav.Link href="#features" className='f_size'>Pages</Nav.Link>
            <Nav.Link href="#features" className='f_size'>Shop</Nav.Link>
            <Nav.Link href="#features" className='f_size'>Contact</Nav.Link>
            <Nav.Link href="#features" className='f_size'>News</Nav.Link>
            <Nav.Link href="#features" className='f_size'>Blogs</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
        </Col>
        <Col xs={6} md={4}>
        <Navbar >
        <Container>
          <Nav className="me-auto ms-5">
            <Nav.Link href="#home" className='f_size'>Pre Sale</Nav.Link>
            <Nav.Link href="#features" className='f_size'>Buy Now</Nav.Link>
           
           
          </Nav>
        </Container>
      </Navbar>
        </Col>
      </Row>
    </Container>
          </div>
   </div>
  )
}

export default Header