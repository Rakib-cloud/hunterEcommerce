import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Heros3.css'
const Heros3 = () => {
  return (
    <div className='customhero' >
        <Row >


<Col xs={12} md={8} >
   <img
  className="heroimg"
  src="https://thehanger.wp-theme.design/wp-content/uploads/nb-third.png"
  alt=""
/>
</Col>


<Col xs={6} md={4}  className="mt-5 customhero1  backs">
    
  <h1 className='titles'>Adaptive Fit</h1>
<p className='titles2'>The moon may always be our first love because is the one far away space object that has the unique distinction of flying close to the earth and upon which man has walked.</p>
<a href=''>Shop Now</a>
</Col>

</Row>
</div>
  )
}

export default Heros3