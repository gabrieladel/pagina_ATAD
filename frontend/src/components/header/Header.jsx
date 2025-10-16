import "./Header.css";
import imgLogo from "../../assets/images/logoAtad.jpg";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-light fixed-top">
        <div className="container">
          <img src={imgLogo} className="header_logo" width="30" height="24" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 bg-light">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#nosotros">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proyectos">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#eventos">
                  Eventos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
