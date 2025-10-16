import "./Footer.css";
import Maps from "../googleMaps/googleMaps";
function Footer() {
  return (
    <>
      <nav className="navbar-expand-lg bg-light fixed">
        <div className="container">
          <div className="lista">
            <ul className="iconos">
              <a href="https://www.facebook.com/profile.php?id=100057622172867&locale=es_LA" target="_blanck" title="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/atad1963/" target="_blanck" title="Instagram"><i className="bi bi-instagram"></i></a>
               <a href="https://www.facebook.com/groups/614288792001824/?ref=share" target="_blanck" title="Whatsapp"><i className="bi bi-whatsapp"></i></a>
               <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=atad1963@gmail.com" target="_blanck" title="Gmail"><i className="bi bi-envelope-at"></i></a>
            </ul>
              {/*  <h4>Encontranos en:</h4> */}
            <div className="ubicacion text-center text-dark p-3 ">
              <i className="bi bi-geo-alt"></i>
      
              <a className='text-dark href="#" '>
                {" "}
                Cnel. Brandsen 498, Tandil, Provincia de Buenos Aires
              </a>
              <Maps />
            </div>
          </div>
        </div>
      </nav>
      </>
  );
}
export default Footer;
