import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const ShopByCategory = () => {
  return (
    <div className="py-5 bg-light">
    <Container>
      <h2 className="border-bottom text-uppercase fw-bold text-center">Shop by Category</h2>
      <Row>
        <Col md={6} lg={3} className="mb-4">
          <Card >
            <Card.Img variant="top" src="./images/category.jpg" width={350} height={200} />
            <Card.Body>
              <Card.Title className='text-center'>Handmade Art</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src="./images/category1.jpg"   width={350} height={200}/>
            <Card.Body>
              <Card.Title className='text-center'>Paintings</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src="./images/category2.jpg"  width={350} height={200}/>
            <Card.Body>
              <Card.Title className='text-center'>Paper Art</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src="./images/category3.jpg"  width={350} height={200}/>
            <Card.Body>
              <Card.Title className='text-center'>Sculpture</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default ShopByCategory
