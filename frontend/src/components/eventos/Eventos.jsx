import "./eventos.css";
import Instagram from "../../assets/images/instagram-logo.png";
import Facebook from "../../assets/images/facebook-logo.svg";
function Eventos() {
  return (
    <>
      <section id="eventos">
        <h2>Seguinos en nuestras redes y enterate de nuestros eventos</h2>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                {/* <h5 className="card-title">Facebook</h5> */}
                <img src={Facebook} className="card-img-top" alt="..." />

                <a
                  href="https://www.facebook.com/profile.php?id=100057622172867&locale=es_LA"
                  target="_blanck"
                  title="Facebook"
                  className="btn btn-primary"
                >
                  Seguinos
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                {/* <h5 className="card-title">Instagram</h5> */}

                <img src={Instagram} className="card-img-top" alt="..." />
                <a
                  href="https://www.instagram.com/atad1963/"
                  target="_blanck"
                  title="Instagram"
                  className="btn btn-primary"
                >
                  Seguinos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Eventos;
