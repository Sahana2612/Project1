import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { carddetails3 } from '../../homeDetails3'
import './homeCard3.css'

const HomeCard3 = () => {
  return (
    <div className='card2home'>
    <Container>
      <Row>
      <h1 className='card-heading1'>Why Zilla</h1>
      <p className='card-paragraph1'>How you will be benefitted by zilla app</p>
           
            {carddetails3.map((data) => {
             return ( 
              <>        
                <Col xs={12} md={3} lg={4}>
                  <div className='zilla-home-card1'>
                    <Card className='zilla-card1' style={{ width: '18rem' }}>
                      <Card.Img style={{width:"20%", marginLeft:"98px"}} src={data.img}/>
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


export default HomeCard3;