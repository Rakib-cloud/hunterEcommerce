import React, { useState, useEffect } from "react";
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

    const [navbarClass, setNavbarClass] = useState(" bg-white");
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavbarClass(" bg-white fixed-top");
      } else {
        setNavbarClass(" bg-white");
      }
    };


  return (
   
         <div className={navbarClass}>
           <div className="heads  ">
          <Container className="">
        <Row>
        <Col xs={6} md={8} className=" header_content1 d-flex align_items-center">
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
         <p><span><FaAlignLeft size={22} className="lll" /> </span> Products <span><FaAngleDown size={22} className="ms-5 down"/> </span></p>
         <ul class="dropdown">
             <li>Laptops</li>
             <li>Monitors</li>
             <li>Printers</li>
         </ul>
     </li>
   
      </ul>

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