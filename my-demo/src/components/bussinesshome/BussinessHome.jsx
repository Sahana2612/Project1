import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img12 from '../images/Frame 1000000796.png'
import './bussinessHome.css'

const BussinessHome = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col xs={12} md={5} lg={5}>
                    <h1 className='card-heading4'>Process</h1>
                    <p className='card-paragraph4'>How your business will get helped with our automated app</p>
                </Col>
                <Col xs={12} md={7} lg={7}>
                    <img className='bussiness-img' src={img12} style={{width:"70%"}}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default BussinessHome