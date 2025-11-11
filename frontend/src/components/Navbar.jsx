import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { PersonCircle } from "react-bootstrap-icons";

const Navbar = () => {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!isDashboard && (
              <>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#nosotros">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#proyectos">Proyectos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#eventos">Eventos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#contacto">Contacto</a>
                </li>
              </>
            )}
          </ul>

          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
            {usuario ? (
              <>
                {usuario.rol === "admin" && !isDashboard && (
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={() => navigate("/dashboard")}
                    >
                      Ir al Panel
                    </button>
                  </li>
                )}

                <li className="nav-item d-flex align-items-center gap-2">
                  <PersonCircle size={22} className="text-secondary" />
                  <span className="text-secondary">{usuario.nombre}</span>
                  <button
                    className="btn btn-link text-secondary text-decoration-none p-0 ms-2"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/login">
                  Iniciar sesión
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

