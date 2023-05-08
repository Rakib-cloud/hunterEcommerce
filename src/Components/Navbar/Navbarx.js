import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl,Button} from 'react-bootstrap';  
import { TiSocialFacebook, TiSocialInstagram, TiSocialPinterest, TiSocialTwitter } from "react-icons/ti";
import{BsSearch, BsSearchHeart} from "react-icons/bs"
import { FaRegHeart, FaRegUser, FaWeightHanging } from "react-icons/fa";
import './Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Navbarx = () => {
  

  return (
    <div>
        <div className='border-bottom respons1'>
          <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="4">
      <div className='d-flex'>
      <div className='d-flex justify-content-start'>

<ul className='list-inline mb-0 '>
    <li className='list-inline-item  '>
    <TiSocialFacebook  />
    </li>

    <li className='list-inline-item  '>
    <TiSocialInstagram />
    </li>

    <li className='list-inline-item '>
    <TiSocialPinterest  />
    </li>
    
    <li className='list-inline-item  '>
    <TiSocialTwitter />
    </li>
   

    
    
   
  </ul>
</div>

<div>
    <p className='contact_number ms-3'>Call +40 123 456 789</p>
</div>
      </div>
        </Col>
        <Col md="auto f_ship" xs lg="4">
  Free shipping on all orders over $75
</Col>
        <Col xs lg="2" className='d-flex '>
        <div class="dropdown ">
  <p class="dropbtn">$US</p>
  <div class="dropdown-content">
    <a href="#">BDT</a>
  </div>
        </div>

        <div class="dropdown ms-3">
  <p class="dropbtn">English</p>
  <div class="dropdown-content">
    <a href="#">Bangla</a>
  </div>
        </div>
        </Col>
      </Row>
      
    </Container>
    {/* topnavbar end */}
    </div>


    {/* under topnavbar work */}

    <Container className='mt-3 respons'>
      <Row className="justify-content-md-center">
        <Col xs lg="4" className='mt-3'>
        <a href="https://thehanger.wp-theme.design/" rel="home">
            <img src="https://thehanger.wp-theme.design/wp-content/themes/the-hanger/images/the-hanger.png" title="The Hanger v.2.1⚡Updated" alt="The Hanger v.2.1⚡Updated" width="200"/>
        
        </a>
        </Col>
        <Col md="auto  " xs lg="4" className='d-flex justify-content-between hoo' >
        <div className="form-group mt-3 ">
      <input
        className="border-0 f_ship"
        type="text"
        placeholder="Product search"
      />
    </div>

     <div className="d-flex align-items-center">
     <DropdownButton id="dropdown-basic-button" title="Select Category" className='mt-3'>
      <Dropdown.Item href="#/action-1">Women</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Men</Dropdown.Item>
      <Dropdown.Item href="#/action-3">children</Dropdown.Item>
    </DropdownButton>
     <h5> <BsSearch className="mt-4 ms-2"/></h5>
     </div>
   
</Col>
        <Col xs lg="2" className='d-flex mt-4 '>
              <FaRegUser size={22} className='ms-4'/>
              <FaRegHeart size={22} className='ms-3'/>
              <FaWeightHanging size={22} className='ms-3'/>
        </Col>
      </Row>
      
    </Container>
     

    <div className='responsive_nav'>  
     <Navbar bg="light" expand={false}>  
  <Container fluid>  

  <Navbar.Toggle aria-controls="offcanvasNavbar" />  
    <Navbar.Offcanvas  
      id="offcanvasNavbar"  
      aria-labelledby="offcanvasNavbarLabel"  
      placement="start"  
    >  
      <Offcanvas.Header closeButton>  
        <Offcanvas.Title id="offcanvasNavbarLabel">Womens Zone</Offcanvas.Title>  
      </Offcanvas.Header>  
      <Offcanvas.Body>  
        <Nav className="justify-content-end flex-grow-1 pe-3">  
          <Nav.Link href="#action1">Home</Nav.Link>  
          <Nav.Link href="#action2">Products</Nav.Link> 
          <Nav.Link href="#action2">contact Us</Nav.Link>  
          <Nav.Link href="#action2">Trending products</Nav.Link>   
          {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">  
            <NavDropdown.Item href="#action3">Contact</NavDropdown.Item>  
            <NavDropdown.Item href="#action4">Dropdown Item 2</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action5">  
              Divided Item  
            </NavDropdown.Item>  
          </NavDropdown>   */}
        </Nav>  
        <Form className="d-flex">  
          <FormControl  
            type="search"  
            placeholder="Search"  
            className="me-2"  
            aria-label="Search"  
          />  
          <BsSearchHeart className='mt-2'/>
        </Form>  

        <Navbar >
        <Container>
          <Nav className="me-auto ms-5">
            <Nav.Link href="#home" className='f_size'>Pre Sale</Nav.Link>
            <Nav.Link href="#features" className='f_size'>Buy Now</Nav.Link>
           
           
          </Nav>
        </Container>
      </Navbar>

      <div className='d-flex justify-content-start'>

<ul className='list-inline mb-0 '>
    <li className='list-inline-item  '>
    <TiSocialFacebook size={22}/>
    </li>

    <li className='list-inline-item  '>
    <TiSocialInstagram size={22}/>
    </li>

    <li className='list-inline-item '>
    <TiSocialPinterest size={22}/>
    </li>
    
    <li className='list-inline-item  '>
    <TiSocialTwitter size={22}/>
    </li>
   

    
    
   
  </ul>
</div>

      </Offcanvas.Body>  
    </Navbar.Offcanvas> 

        <div className='small_logo'>
        <img src="https://thehanger.wp-theme.design/wp-content/themes/the-hanger/images/alternative_logo.png" className='logoimg h-50 w-50' alt='womenlogo' ></img>
      </div> 
   

   <div className='mr-5'>
            <FaRegUser className='ms-4'/>
              <FaRegHeart className='ms-3'/>
   </div>

  

  </Container>  
</Navbar>  
  </div>
   
    </div>
  )
}

export default Navbarx