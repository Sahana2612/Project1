import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { carddetails } from '../homeDetails'
// import img2 from '../images/Frame.png'
import './homeCard2.css'

const HomeCard2 = () => {
  return (
    <div className='card2home'>
    <Container>
      <Row>
      <h1 className='card-heading1'>All-in-one</h1>
      <p className='card-paragraph1'>Zilla Software is for every industry</p>
           
            {carddetails.map((data) => {
             return ( 
              <>
                <Col xs={12} md={3} lg={4}>
                  <div className='zilla-home-card1'>
                    <Card className='zilla-card1' style={{ width: '18rem' }}>
                      <Card.Img variant="top" style={{width:"20%"}} src={data.img}/>
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                          {data.info}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </>
             )
            })}
      </Row>
    </Container>
    </div>
  )
}


export default HomeCard2;