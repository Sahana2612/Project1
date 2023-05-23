import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../images/Group 1000000783.png'
import './homeBanner.css'

const HomeBanner = () => {
  return (
    <>
        <div className="bagd">
            <Container>
                <Row>
                <Col xs={12} md={5}>
                    <h1 className='banner-heading'>Revolutionize Your Business with Zilla Salesforce</h1>
                    <p className='banner-para'> Discover the power of Zilla Salesforce - the ultimate solution for businesses of all sizes. From order bookings and expense management to location tracking and task management</p>
                </Col>
                <Col xs={12} md={7}>
                <img className='banner-photo' src={img1} alt=" "/>
                </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default HomeBanner;