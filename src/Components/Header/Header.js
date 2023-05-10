import React, { useState } from "react"; 
import{BsBag, BsHeart, BsSearch, BsSearchHeart} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"
import './Header.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl,Button} from 'react-bootstrap';  
import { TiSocialFacebook, TiSocialInstagram, TiSocialPinterest, TiSocialTwitter } from "react-icons/ti";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FaAlignLeft, FaAngleDown, FaAngleUp } from "react-icons/fa";

const Header = () => {
    


  return (
    <div className="py-3 border-bottom ">
      <div className="container responsive_null">
        <div className="row align-items-center">
            <div className="col-3">
              <div className="logo-container d-flex align-items-center">
                <div className="logo">

                </div>
                  <a href="https://thehanger.wp-theme.design/" rel="home">
            <img src="https://thehanger.wp-theme.design/wp-content/themes/the-hanger/images/the-hanger.png" title="The Hanger v.2.1⚡Updated" alt="The Hanger v.2.1⚡Updated" width="200"/>
        
             </a>
              </div>
            </div>
            <div className="col-6">
              <div className="row g-0 border-0 border-bottom rounded-0 ">
                <div className="col-8">
                  <input placeholder="Search product" style={{fontSize:'13px'}} className="w-100 focus-out common-padding border-0"/>
                </div>
                <div className="col-4">
                  <div className="row">
                    <div className="col-9">                     
                      <DropdownButton id="dropdown-basic-button" title="Select Category" className='w-100 focus-out common-padding border-0 bg-transparent'>
                           <Dropdown.Item href="#/action-1">Women</Dropdown.Item>
                           <Dropdown.Item href="#/action-2">Men</Dropdown.Item>
                           <Dropdown.Item href="#/action-3">children</Dropdown.Item>
                      </DropdownButton>

                    </div>
                    <div className="col-3">
                      <div className="common-padding"><BsSearch size={22}/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div>
                <ul className="d-flex items-center justify-content-end">
                  <li><Nav><AiOutlineUser size={25}/></Nav></li>
                  <li className="ms-4"><Nav><BsHeart size={25}/></Nav></li>
                  <li className="ms-4"><Nav><BsBag size={25}/></Nav></li>
                </ul>
              </div>
            </div>
        </div>
      </div>

      <div className="container responsive_null mt-4 ">
        <div className="row align-items-center">
            <div className="col-3">
              <div className="logo-container d-flex align-items-center">
                  <ul className="leftside-ul">
                                <li>
                                     <p><span><FaAlignLeft size={22} /> </span> Products <span><FaAngleDown size={22} className="ms-5 down"/> </span></p>
                                     <ul class="dropdown">
                                          <li>Laptops</li>
                                          <li>Monitors</li>
                                          <li>Printers</li>
                                                    </ul>
                                                        </li>
   
                                                     </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="row ">
              <Navbar>
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
              </div>
            </div>
            <div className="col-3">
              <div>
                <ul className="d-flex items-center justify-content-end">
                  <li><Nav.Link href="#home" className='f_size'>Pre Sale</Nav.Link></li>
                  <li className="ms-4"><Nav.Link href="#features" className='f_size'>Buy Now</Nav.Link></li>
                  
                </ul>
              </div>
            </div>
        </div>
      </div>


     
       <Navbar bg="light" expand={false} className="responsive_nav">  
  <Container fluid>  

  <Navbar.Toggle aria-controls="offcanvasNavbar" className="" />  
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
          <BsSearch size={25} className='mt-2'/>
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
            <FaRegUser size={22} className='ms-4'/>
              <FaRegHeart size={22} className='ms-3'/>
   </div>

  

  </Container>  
       </Navbar>  
    </div>
  )
}

export default Header