import { Container, Row, Col } from "react-bootstrap";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline
} from "react-icons/io5";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-bg text-light py-4 mt-5">
      <Container>
        
        <Row className="text-center text-md-start mb-4">

          {/* Logo + descripción */}
          <Col md={4} className="mb-3">
            <h4 className="fw-bold">ATAD</h4>
            <p>
              Centro de asistencia donde trabajamos para mejorar la calidad de vida
              de niños, jóvenes y adultos con discapacidad.
            </p>
          </Col>

          {/* Contacto */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <p><IoLocationOutline className="footer-icon" /> Cnel. Brandsen 498, Tandil, Buenos Aires</p>
            <p><IoCallOutline className="footer-icon" /> +54 249 438-8507</p>
            <p><IoMailOutline className="footer-icon" /> atad1963@gmail.com</p>
          </Col>

          {/* Redes sociales */}
          <Col md={3} className="mb-3">
            <h5 className="fw-bold mb-3">Seguinos</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com/people/ATAD/100057622172867/" className="footer-social">
                <IoLogoFacebook />
              </a>
              <a href="https://www.instagram.com/atad1963/" className="footer-social">
                <IoLogoInstagram />
              </a>
             
            </div>
          </Col>

        </Row>

        {/* Línea inferior */}
        <Row>
          <Col className="text-center pt-3 border-top border-secondary">
            <p className="m-0">&copy; 2025 ATAD - Todos los derechos reservados</p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
}

export default Footer;

