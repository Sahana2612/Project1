import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import img7 from '../images/businessman (1).png'
import img8 from '../images/handshake (1) 1.png'
import img9 from '../images/teamwork.png'
import img10 from '../images/man 1.png'
import './modelshome.css' 

const Modelshome = () => {
  return (
    <div>
        <Container>
            <Row>
                
                    <h1 className='card-heading1'>everything under one umbrella</h1>
                    <p className='card-paragraph1'>How our app can boost your sales and impacts your business</p>
                        <Col xs={12} md={3} lg={3}>
                            <img src={img7}/> <br/>
                            <button className='model-buttons'>CXO</button>
                        </Col>

                        <Col xs={12} md={3} lg={3}>
                            <img src={img8}/>  <br/>
                            <button className='model-buttons'>Dealers</button>     
                        </Col>

                        <Col xs={12} md={3} lg={3}>
                            <img src={img9}/> <br/>
                            <button className='model-buttons'>Employees</button>
                        </Col>

                        <Col xs={12} md={3} lg={3}>
                            <img src={img10}/> <br/>
                            <button className='model-buttons'>Field staffs</button>
                        </Col>
            
            </Row>
        </Container>
    </div>
  )
}

export default Modelshome