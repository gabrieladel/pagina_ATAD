import "./SeccionProyectos.css";
import inicial from '../../assets/images/inicial.jpg';
import primaria from '../../assets/images/primaria.jpg';
import proyecto2 from '../../assets/images/proyecto2.jpg';

function SeccionProyectos() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">PROPUESTAS EDUCATIVAS</h2>

      <div className="row g-4 justify-content-center">

        {/* -------- TARJETA 1 -------- */}
        <div className="col-md-4">
          <div className="flip-card">
            <div className="flip-card-inner">

              <div className="flip-card-front">
                <img src={inicial} className="img-fluid rounded-3" alt="Inicial" />
                <h3 className="text-center mt-3 fw-bold">Nivel Inicial</h3>
              </div>

              <div className="flip-card-back p-3 rounded-3">
                <h4 className="fw-bold">NIVEL INICIAL</h4>
                <p>
                  La modalidad de Educación Especial asume la inclusión educativa como política de Estado.
                  <br /><br />
                  • Propiciar el reconocimiento cultural de las familias.
                  <br />
                  • Promover aprendizajes autónomos.
                  <br />
                  • Favorecer el desarrollo integral en un clima de afecto y comprensión.
                  <br />
                  • Garantizar el derecho a la educación.
                  <br />
                  • Actuar en pos del cuidado integral.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* -------- TARJETA 2 -------- */}
        <div className="col-md-4">
          <div className="flip-card">
            <div className="flip-card-inner">

              <div className="flip-card-front">
                <img src={primaria} className="img-fluid rounded-3" alt="Primaria" />
                <h3 className="text-center mt-3 fw-bold">Nivel Primario</h3>
              </div>

              <div className="flip-card-back p-3 rounded-3">
                <h4 className="fw-bold">NIVEL PRIMARIO</h4>
                <p>
                  • Enriquecer las fortalezas para el aprendizaje.
                  <br />
                  • Estrategias comunicativas para mayor autonomía.
                  <br />
                  • Conocimiento en áreas curriculares desde la modalidad.
                  <br />
                  • Perspectiva de Educación Sexual Integral.
                  <br />
                  • Exploración científica del ambiente.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* -------- TARJETA 3 -------- */}
        <div className="col-md-4">
          <div className="flip-card">
            <div className="flip-card-inner">

              <div className="flip-card-front">
                <img src={proyecto2} className="img-fluid rounded-3" alt="CFI" />
                <h3 className="text-center mt-3 fw-bold">CFI</h3>
              </div>

              <div className="flip-card-back p-3 rounded-3">
                <h4 className="fw-bold">CFI</h4>
                <p>
                  • Formación técnica y general (doble jornada).
                  <br />
                  • Trayectorias educativas continuas.
                  <br />
                  • Participación juvenil y ciudadanía.
                  <br />
                  • Desarrollo de autonomía.
                  <br />
                  • Uso de recursos tecnológicos.
                  <br />
                  • Proyectos de vida para jóvenes con discapacidad.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SeccionProyectos;


