import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { details } from '../Demo';
import './homeCard.css';
import img2 from '../images/Frame 1000000799.png';


const HomeCard = () => {
  return (
    <div style={{ background:"#F9FAFB"}}>
    <Container>
      <Row>
      <h1 className='card-heading'>How does Zilla Effectively Manage & Monitor your Field Staff?</h1>
      <p className='card-paragraph'>Our software suite offers location tracking, automated attendance, and task management for effective field force management.</p>
            {details.map((data) => {
             return ( 
              <>
                <Col xs={12} md={3} lg={4}>
                  <div className='zilla-home-card'>
                    <Card className='zilla-card' style={{ width: '18rem' }}>
                      <Card.Img variant="top" style={{width:"20%"}} src={img2} />
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                          {data.info}
                        </Card.Text>
                        <button className='btn3'>Read more - </button>
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

export default HomeCard;