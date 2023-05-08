import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsBag } from 'react-icons/bs'

const Services = () => {
  return (
    <div className='mt-5 border-bottom border-top'>
        <Container>
            <Row>
            <Col xs={12} md={4}>
          <div className='d-flex'>
            <BsBag className='mt-2'/>
            <div className='ms-3'>
                <p>Free Worldwide Shipping <br/>
                On all orders over $75.00
                </p>
                
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
        <div className='d-flex'>
            <BsBag className='mt-2'/>
            <div className='ms-3'>
                <p>Free Worldwide Shipping <br/>
                On all orders over $75.00
                </p>
                
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
        <div className='d-flex'>
            <BsBag className='mt-2'/>
            <div className='ms-3'>
                <p>Free Worldwide Shipping <br/>
                On all orders over $75.00
                </p>
                
            </div>
          </div>
        </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Services