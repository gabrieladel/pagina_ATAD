import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer text-light py-2 fixed-bottom footer">
      <Container>
        <Row className="text-center justify-content-center">
          <Col md={12} className="d-flex flex-column align-items-center gap-2"> 
            <Nav className="gap-3 fs-4 footer-icons">
              <Nav.Link href="https://www.facebook.com/profile.php?id=100057622172867" target="_blank" className="text-light">
                <i className="bi bi-facebook"></i>
              </Nav.Link>

              <Nav.Link href="https://www.instagram.com/atad1963/" target="_blank" className="text-light">
                <i className="bi bi-instagram"></i>
              </Nav.Link>

           {/*    <Nav.Link href="https://www.facebook.com/groups/614288792001824" target="_blank" className="text-light">
                <i className="bi bi-whatsapp"></i>
              </Nav.Link> */}

              <Nav.Link href="mailto:atad1963@gmail.com" target="_blank" className="text-light">
                <i className="bi bi-envelope-at"></i>
              </Nav.Link>
            </Nav>
            <p className="mb-0 d-flex align-items-center justify-content-center text-light">
              <i className="bi bi-geo-alt me-2"></i>
              Cnel. Brandsen 498, Tandil, Buenos Aires
            </p>
            <p className="mb-0 d-flex align-items-center justify-content-center text-light">
              <i className="bi bi-telephone me-2">
              </i>
              249 438-8507
            </p>

          </Col>
        </Row>
      </Container>

      <div className="footer-copy text-center py-2 small mt-2 border-top border-light">
        © {new Date().getFullYear()} ATAD — Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer;

