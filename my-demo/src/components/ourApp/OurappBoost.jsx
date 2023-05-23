import React from 'react'
import '../ourApp/ourappBoost.css'
import img6 from '../images/21517039_22 2.png'
import {Row, Col, Container} from 'react-bootstrap'

const OurappBoost = () => {
  return (
    <div className='our-bg'>
        <h1 className='card-heading1'>everything under one umbrella</h1>
        <p className='card-paragraph1'>How our app can boost your sales and impacts your business</p>
        <Row>
            <Col xs={12} md={5} lg={5}>
            <img className='my-5' src ={img6} />
            </Col>
            <Col xs={12} md={7} lg={7}>
                <ul className='list-style-space my-5'>
                    <li>Our appautomates the sales process, reducing manual labor and saving time</li>
                    <li>Improves the accuracy of sales data and order management</li>
                    <li>Provides real-time visibility into employee location and performance</li>
                    <li>Reporting functionality is highly customizable, enabling businesses to generate</li>
                    <li>This can help businesses avoid costly mistakes, improve customer satisfaction</li>
                    <li>Businesses can increase efficiency, allowing employees to focus on other areas</li>
                    <li>Our app uses secure, cloud-based technology to store data, ensuring that sensitive information is protected</li>
                </ul>
            </Col>
        </Row>     
    </div>
  )
}


export default OurappBoost;