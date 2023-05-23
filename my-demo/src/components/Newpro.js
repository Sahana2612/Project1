import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { details } from './Demo'

export const Newpro = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <Card>
                    {details.map((data)=>{
                        <Card.Body key={data.id}>
                            {data.img}
                        </Card.Body>
                    })}
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
