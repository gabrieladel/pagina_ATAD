import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import imgLogo from "../assets/images/logoAtad.jpg";
import { BsPerson } from "react-icons/bs";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const CustomNavbar = () => {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" className="shadow-sm">
      <Container>
       <Navbar.Brand as={Link} to="/" className="Logo fw-bold text-dark">
          <img
            src={imgLogo}
            alt="Logo"
            width="50"
            height="44"
            />
        </Navbar.Brand>
        {/* Botón hamburguesa */}
      {  <Navbar.Toggle aria-controls="main-navbar" />}

        <Navbar.Collapse id="main-navbar" className="bg-light" >
          <Nav className="me-auto">
            {!isDashboard && (
              <>
                <Nav.Link as={Link} to="/" className="text-dark">
                  Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/proyectos" className="text-dark">
                  Proyectos
                </Nav.Link>
                <Nav.Link as={Link} to="/noticias" className="text-dark">
                  Noticias
                </Nav.Link>
                <Nav.Link as={Link} to="/actividades" className="text-dark">
                  Actividades
                </Nav.Link>
                <Nav.Link as={Link} to="/contacto" className="text-dark">
                  Contacto
                </Nav.Link>
              </>
            )}
          </Nav>

          <Nav className="ms-auto align-items-center gap-3">
            {usuario ? (
              <>
              <NavDropdown
                  title={
                    <span className="d-flex align-items-center">
                      <BsPerson size={22} className="text-secondary me-1" />
                      <span className="text-secondary">{usuario.nombre}</span>
                    </span>
                  }
                  id="user-dropdown"
                  align="end"
                >
                  {usuario.rol === "admin" && !isDashboard && (
                  
                    <NavDropdown.Item  onClick={() => navigate("/dashboard")}>
                   Ir al Panel
                  </NavDropdown.Item>
                 
                )}
                  <NavDropdown.Item onClick={handleLogout}>
                    Cerrar sesión
                  </NavDropdown.Item>
                </NavDropdown>
                
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="text-dark">
                Iniciar sesión
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;


