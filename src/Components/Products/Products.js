import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsCartCheck, BsHeart, BsSearch, BsStar } from 'react-icons/bs'
import { FaRandom } from 'react-icons/fa'
import './Products.css'
const Products = () => {
  return (
 <div className='mt-5 '>
   <Container>
   <Row>

<Col lg={4} md={3} sm={2}>
    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
                <img class="pic-1" src="https://thehanger.wp-theme.design/wp-content/uploads/3330312204_2_1_0-330x413.jpg"/>
                <img class="pic-2" src="https://thehanger.wp-theme.design/wp-content/uploads/3307312032_2_1_0-330x413.jpg"/>
            </a>
            <ul class="product-links">
            <li><a href="#"><BsCartCheck/></a></li>
                <li><a href="#"><BsHeart/></a></li>
              
            </ul>

            <ul class="product-links1">
                <li><a href="#"><FaRandom/></a></li>
                <li><a href="#"><BsSearch/></a></li>
            </ul>

        </div>
        <div class="product-content">
            <ul class="rating">
                <BsStar/>
                <BsStar/>
                <BsStar/>
                <BsStar/>
                <BsStar/>
            </ul>
            <h3 class="title"><a href="#">zigzag shoes</a></h3>
            <div class="price">$85.55</div>
        </div>
    </div>
</Col>




</Row>
   </Container>
 </div>
    
  )
}

export default Products