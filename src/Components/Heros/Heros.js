import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Heros.css'
const Heros = () => {
  return (
    <Container fluid className='mt-5'>
    <Row>
      <Col sm={12} md={12} lg={12}>
      <h3 className='hero-title text-center'>Fresh Foam Lazr Hyposkin<br/>
       Up to 70% Off. All Sales are Final!</h3>

   <p className='hero-title2 text-center'>Military Foliage Green with Phantom & Sea Salt</p>

             {/* <button className='btn_see'>
             <a className='btnx' href='#'>Discover sales</a>
               </button> */}
               <button class="button-31" role="button">Discover Sales</button>
      </Col>
    </Row>
  </Container>
  )
}

export default Heros