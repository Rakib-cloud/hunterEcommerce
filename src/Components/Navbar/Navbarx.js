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
        <div className='border-bottom navbar_res_null py-1'>
    <div className="container responsive_null">
        <div className="row align-items-center">
            <div className="col-3">
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
                  <p className='contact_number ms-3'>Call +40 123 456 789</p>
              </div>
                    
            </div>
            <div className="col-6">
                   <p className='text-center f_ship'>Free shipping on all orders over $75
                       </p>
            </div>
            <div className="col-3">
              <div className='d-flex items-center justify-content-end'>
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
              </div>
            </div>
        </div>
      </div>
    </div>


     

  
   
    </div>
  )
}

export default Navbarx