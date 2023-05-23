import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img11 from '../images/image 61.png'
import './watchHome.css'

const WatchHome = () => {
  return (
    <div className='watch-bg'>
        <Container>
            <Row>
            <h1 className='card-heading1'>everything under one umbrella</h1>
            <p className='card-paragraph1'>How our app can boost your sales and impacts your business</p>
                <Col xs={12} md={6} lg={6}>
                    <img className='watch-images mt-5' src={img11}/>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <h3 className='watch-para1'>Check out the demo video to see it in action.</h3>
                    <p className='watch-para2'>Can you provide an explanation on the functionality and inner workings of the Zilla Salesforce application? I am curious to know how this particular software operates and assists with sales management.</p>
                
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default WatchHome