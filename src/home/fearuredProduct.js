import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const FeaturedProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 99.99,
      image: "./images/product-image.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 89.99,
      image: "./images/product-image2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 79.99,
      image: "./images/product-image3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: 69.99,
      image: "./images/product-image4.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: 59.99,
      image: "./images/product-image5.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: 49.99,
      image: "./images/product-image6.jpg",
    },
    {
      id: 7,
      name: "Product 7",
      price: 39.99,
      image: "./images/product-image7.jpg",
    },
    {
      id: 8,
      name: "Product 8",
      price: 29.99,
      image: "./images/product-image8.jpg",
    },
  ];

  const productsPerPage = 4;
  const pagesCount = Math.ceil(products.length / productsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pagesCount - 1));
  };

  const startIndex = currentPage * productsPerPage;
  const visibleProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <Container className="my-5">
      <Row>
        <Col className="text-center">
          <h2 className="border-bottom text-uppercase fw-bold">Top Picks</h2>
        </Col>
      </Row>
      <Row>
        {visibleProducts.map((product) => (
          <Col sm key={product.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} height={350} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Button
            variant="dark"
            className="m-auto"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Button>
        </Col>
        <Col className="text-end">
          <Button
            variant="dark"
            onClick={handleNextPage}
            disabled={currentPage === pagesCount - 1}
            className="ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
