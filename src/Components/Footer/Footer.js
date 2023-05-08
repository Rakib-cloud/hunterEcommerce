import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { TiSocialFacebook, TiSocialInstagram, TiSocialPinterest, TiSocialTwitter } from "react-icons/ti";
import {BiCopyright} from "react-icons/bi";
import './Footer.css'
const Footer = () => {
  return (
  <div>
    		<footer id="footer">
			<div class="container">
				<div class="row">
					<div class="col-md-3">
						<a href="index.html"><img src="https://thehanger.wp-theme.design/wp-content/themes/the-hanger/images/the-hanger.png" alt="" class="img-fluid logo-footer"/></a>
                      <div class="footer-about">
                          <p>worlds best shoes is here .Your choise is our first priority  </p>
                      </div>

					</div>
					<div class="col-md-3">
						<div class="useful-link">
							<h2>Useful Links</h2>
							<img src="./assets/images/about/home_line.png" alt="" class="img-fluid"/>
							<div class="use-links">
								<li><a href="index.html"><i class="fa-solid fa-angles-right"></i> Home</a></li>
								<li><a href="about.html"><i class="fa-solid fa-angles-right"></i> About Us</a></li>
								<li><a href="gallery.html"><i class="fa-solid fa-angles-right"></i> Gallery</a></li>
								<li><a href="contact.html"><i class="fa-solid fa-angles-right"></i> Contact</a></li>
							</div>
						</div>

					</div>
                    <div class="col-md-3">
                        <div class="social-links">
							<h2>Follow Us</h2>
							<img src="" alt=""/>
							<div class="social-icons">
								<li><a href=""><TiSocialFacebook /> Facebook</a></li>
								<li><a href=""><TiSocialInstagram/> Instagram</a></li>
								<li><a href=""><TiSocialTwitter/> Linkedin</a></li>
							</div>
						</div>
                    

                    </div>
					<div class="col-md-3">
						<div class="address">
							<h2>Address</h2>
							<img src="" alt="" class="img-fluid"/>
							<div class="address-links">
								<li class="address1"><i class="fa-solid fa-location-dot"></i> banglamotor
								</li>
								   <li><a href=""><i class="fa-solid fa-phone"></i> 011111111111111111</a></li>
								   <li><a href=""><i class="fa-solid fa-envelope"></i> mail@1234567.com</a></li>
							</div>
						</div>
					</div>
                  
				</div>
			</div>

		</footer>
		
		<Container id="copy-right">

        <ul class="nav">
  <li className='ms-4 footfont'><a href="#about">Payment</a></li>
  <li className='ms-4 footfont'><a href="#clients">Shipping and Returns</a></li>  
  <li className='ms-4 footfont'><a href="#contact">Gift Cards</a></li>
  <li className='ms-4 footfont'><a href="#contact">Terms and condition</a></li>
</ul>

			<div class="copy-right-sec"><BiCopyright/>  

   
				<span className='footfont mb-4'>copyright 2023 Powerd By <a href="#">Selopia</a> </span>


			</div>

		</Container>
  </div>
  )
}

export default Footer