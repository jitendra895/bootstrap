import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
const Figures = () => {
  return (
<section className="py-5 py-lg-7 mt-5 mt-lg-7 bg-light">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={3}>
            <p className="mb-5 mb-md-0">
              <span
                className="display-4 fw-bold"
                data-countup=""
                data-to="20000"
                data-options='{"suffix": "+", "startVal": 10000}'
              >
                4,00,000+
              </span>
              <br />
              <span className="d-block text-muted mt-n1">Customers</span>
            </p>
          </Col>
          <Col md={3}>
            <p className="mb-5 mb-md-0">
              <span className="display-4 fw-bold" data-countup="" data-to="400">
                200+
              </span>
              <br />
              <span className="d-block text-muted mt-n1">Sellers</span>
            </p>
          </Col>
          <Col md={3}>
            <p className="mb-5 mb-md-0">
              <span className="display-4 fw-bold" data-countup="" data-to="50">
                50+
              </span>
              <br />
              <span className="d-block text-muted mt-n1">Countries</span>
            </p>
          </Col>
          <Col md={3}>
            <p className="mb-md-0">
              <span className="display-4 fw-bold" data-countup="" data-to="1500">
                15,000+
              </span>
              <br />
              <span className="d-block text-muted mt-n1">Orders</span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Figures;
