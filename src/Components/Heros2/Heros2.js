import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Heros2.css'

const Heros2 = () => {
  return (
    <div className='' >
      
        <Container >
        <Row >

        <Col xs={6} md={4} sm={12} className="mt-5 leftside ">
            
          <h1 className='titles'>Precision-Cut<br/>
Comfort</h1>
<p className='titles2'>The moon may always be our first love because is the one far away space object that has the unique distinction of flying close to the earth and upon which man has walked.</p>
 <a href=''>Shop Now</a>
        </Col>

        <Col xs={12} md={8} sm={12}>
           <img
          className="heroimg"
          src="https://thehanger.wp-theme.design/wp-content/uploads/nb-second.png"
          alt=""
        />
        </Col>
       
      </Row>
        </Container>
    </div>
  )
}

export default Heros2