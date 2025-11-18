import { useState } from "react";
import { Container, Row, Col, Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import NoticiasCRUD from "../Crud/NoticiasCRUD";
import ActividadesCRUD from "../Crud/ActividadesCRUD";
import UsuariosCRUD from "../Crud/UsuariosCRUD";
import ContactosCRUD from "../Crud/ContactosCRUD";
import imgLogo from "../../assets/images/logoAtad.jpg";
import "./Dashboard.css";
import {
  IoHomeSharp,
  IoNewspaperSharp,
  IoCalendarClearSharp,
  IoPeopleSharp,
  IoMailOpen
} from "react-icons/io5";


const Dashboard = () => {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarMobile, setSidebarMobile] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("inicio");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSidebarMobile = () => setSidebarMobile(!sidebarMobile);

  const renderContenido = () => {
    switch (seccionActiva) {
      case "noticias":
        return <NoticiasCRUD />;
      case "actividades":
        return <ActividadesCRUD />;
      case "usuarios":
        return <UsuariosCRUD />;
      case "contactos":
        return <ContactosCRUD />;
      default:
        return (
          <div className="text-center mt-5 p-4"
            style={{
              background: "white",
              borderRadius: "12px",
              maxWidth: "420px",
              margin: "0 auto",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={imgLogo}
              alt="Logo"
              width="80"
              className="mb-3"
              style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" }}
            />

            <h2 className="fw-bold mb-2">¡Bienvenido, {usuario?.nombre}!</h2>
            <p className="text-muted mb-4">Selecciona una sección del menú para comenzar.</p>

            <Button
              variant="dark"
              size="lg"
              className="px-4"
              onClick={() => navigate("/")}
            >
              Ver Sitio Web
            </Button>
          </div>

        );
    }
  };

  return (
    <>
      <Container fluid>
        <Navbar bg="dark" variant="dark" fixed="top" className="w-100" expand="lg">
          <Button
            variant="outline-light"
            className="me-3 d-lg-none"
            onClick={toggleSidebarMobile}
          >
            <i className="bi bi-list"></i>
          </Button>

          <Button
            variant="outline-light"
            className="me-3 d-none d-lg-block"
            onClick={toggleSidebar}
          >
            <i className="bi bi-layout-sidebar-inset-reverse"></i>
          </Button>

          <Navbar.Brand className="fw-bold">ATAD | Panel Admin</Navbar.Brand>

          <Nav className="ms-auto">
            <Button
              variant="outline-light"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              <i className="bi bi-box-arrow-right"></i> Salir
            </Button>
          </Nav>

        </Navbar>
      </Container>
      <Container fluid className="dashboard-container">
        <Row>
          <Col
            lg={sidebarOpen ? 2 : 1}
            className={`sidebar d-none d-lg-block ${sidebarOpen ? "open" : "collapsed"}`}
          >
            <Nav className="flex-column mt-3">

              <Nav.Link onClick={() => setSeccionActiva("inicio")}>
                <IoHomeSharp size={22} className="me-2" color="#3f51b5" />
                {sidebarOpen && "Inicio"}
              </Nav.Link>

              <Nav.Link onClick={() => setSeccionActiva("noticias")}>
                <IoNewspaperSharp size={22} className="me-2" color="#ff9800" />
                {sidebarOpen && "Noticias"}
              </Nav.Link>

              <Nav.Link onClick={() => setSeccionActiva("actividades")}>
                <IoCalendarClearSharp size={22} className="me-2" color="#4caf50" />
                {sidebarOpen && "Actividades"}
              </Nav.Link>

              <Nav.Link onClick={() => setSeccionActiva("usuarios")}>
                <IoPeopleSharp size={22} className="me-2" color="#e91e63" />
                {sidebarOpen && "Usuarios"}
              </Nav.Link>

              <Nav.Link onClick={() => setSeccionActiva("contactos")}>
                <IoMailOpen size={22} className="me-2" color="#2196f3" />
                {sidebarOpen && "Contactos"}
              </Nav.Link>

            </Nav>

          </Col>

          {/* SIDEBAR MOVIL */}
          <Offcanvas show={sidebarMobile} onHide={toggleSidebarMobile} className="d-lg-none">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link onClick={() => { setSeccionActiva("inicio"); toggleSidebarMobile(); }}>
                  <i className="bi bi-house-door me-2"></i> Inicio
                </Nav.Link>

                <Nav.Link onClick={() => { setSeccionActiva("noticias"); toggleSidebarMobile(); }}>
                  <i className="bi bi-newspaper me-2"></i> Noticias
                </Nav.Link>

                <Nav.Link onClick={() => { setSeccionActiva("actividades"); toggleSidebarMobile(); }}>
                  <i className="bi bi-calendar-event me-2"></i> Actividades
                </Nav.Link>

                <Nav.Link onClick={() => { setSeccionActiva("usuarios"); toggleSidebarMobile(); }}>
                  <i className="bi bi-people me-2"></i> Usuarios
                </Nav.Link>

                <Nav.Link onClick={() => { setSeccionActiva("contactos"); toggleSidebarMobile(); }}>
                  <i className="bi bi-envelope me-2"></i> Contactos
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>

          <Col lg={sidebarOpen ? 10 : 11} className="contenido">
            {renderContenido()}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
