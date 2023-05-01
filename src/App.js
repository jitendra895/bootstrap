import "./App.css";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FeaturedProducts from "./home/fearuredProduct";
import Figures from "./home/figures";
import Footer from "./home/footer";
import ShopByCategory from "./home/shopByCategory";
function App() {
  return (
    <div>
      <Navbar expand="lg" className="navbar-dark bg-light">
        <Navbar.Brand href="#" className="logo">
          <img
            alt=""
            src="/logo.png"
            width="80"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Nav className="mr-auto">
              <Nav.Link href="#" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="nav-link">
               Categories
              </Nav.Link>
              <Nav.Link href="#" className="nav-link">
                Filters
              </Nav.Link>
              <Nav.Link href="#" className="nav-link">
                Sales %
              </Nav.Link>
            </Nav>
          </Container>
          <Container>
            <Nav className="justify-content-end">
              <Nav.Link href="#">
                <Button variant="success"> Sign In</Button>{" "}
              </Nav.Link>
              <Nav.Link href="#">
                <Button variant="secondary"> Sign Up</Button>{" "}
              </Nav.Link>
              <Nav.Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-cart-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
      <div className="bg-image">
        <Container>
          <div className="col position-relative p-3">
            <h1 className="display-2  mt-5 my-custom-class">ArtHub</h1>
            <a
              href="#"
              data-scroll=""
              className="btn btn-danger text-uppercase d-inline-flex align-items-center"
            >
              Reserve your favorites
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-right-circle-fill mx-1"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </a>
          </div>
        </Container>
      </div>
      <section className="bg-dark p-5  text-white">
        <Container>
          <Row>
            <Col sm>
              <h2 className="h3">What is ArtHub?</h2>
            </Col>
            <Col sm>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                lacus mollis, maximus metus vel, egestas nisl. Praesent neque
                lorem, luctus non metus id, finibus fermentum velit.
              </p>
              <p className="mb-0">
                Quisque lobortis nisi et efficitur sollicitudin. Fusce dapibus,
                sem sed posuere sollicitudin, dui tellus aliquam augue, et
                aliquam sem justo sodales eros. Donec consequat aliquet quam,
                quis molestie enim porttitor quis.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <ShopByCategory/>
     <FeaturedProducts/>
     <Figures/>
     <Footer/>
    </div>
  );
}

export default App;
