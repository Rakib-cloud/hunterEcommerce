import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Responsive = () => {
  return (
    <Container>
        <Row>
             <Col lg={12} xs={12} md={12}>
                <div className='bg-danger p-4'>

                </div>
             </Col>

             
        </Row>

        <Row className='mt-5'>
            <Col lg={6} md={12}>
            <div className='bg-success p-4'>

            </div>
            </Col>

            <Col lg={6} md={12} >
            <div className='bg-danger p-4'>

            </div>
            </Col>

        </Row>

        <Row className='mt-5'>
            <Col lg={3} md={6} sm={6}>
            <div className='bg-success p-4 '>

            </div>
            </Col>

            <Col lg={3} md={6} sm={6} >
            <div className='bg-info p-4 '>

            </div>
            </Col>

            <Col lg={3} md={6} sm={6}>
            <div className='bg-warning p-4 '>

            </div>
            </Col>

            <Col lg={3} md={6} sm={6} >
            <div className='bg-danger p-4 '>

            </div>
            </Col>


        </Row>


    </Container>
  )
}

export default Responsive