import "./SeccionProyectos.css";
import inicial from '../../assets/images/inicial.jpg';
import primaria from '../../assets/images/primaria.jpg';
import proyecto2 from '../../assets/images/proyecto2.jpg';

function SeccionProyectos() {
  return (
    <>
      <div>
        <div className="titulo">
          <h2>PROPUESTAS EDUCATIVAS</h2>
        </div>
        <div className="container-fluid p-0">
          <div className="container pt-5 pb-5">
            <div className="row justify-content-center mt-5 mb-5">
              <div className="col-sm-6">
                <div className="row m-2 align-items-center shadow bg-white rounded-3 py-3">
                  <div className="col-sm-5">
                    <img src={inicial} className="img-fluid rounded-1" />
                  </div>
                  <h3 className="fs-5 fw-bolder">NIVEL INICIAL</h3>
                  <p> La modalidad de Educación Especial asume actualmente como posicionamiento político-pedagógico la centralidad de la enseñanza, la igualdad como punto de partida, el derecho político a las diferencias y la inclusión educativa como política de Estado”</p>
                  Trabajar de manera corresponsable con las instituciones de nivel.
                    ⦁	Propiciar el reconocimiento cultural de las familias que conforman la sala y la institución de modalidad.
                    ⦁	Posibilitar el acceso cada vez más autónomo a los aprendizajes.
                    ⦁	Favorecer el desarrollo integral de las infancias brindando seguridad y confianza, en un clima de hospitalidad, afecto y comprensión que promueva el avance en todos sus aprendizajes.
                    ⦁	Promover y garantizar el derecho a la educación de niñas y niños con discapacidad.
                    ⦁	Actuar en pos del cuidado integral de niñas y niños .
                </div>
              </div>
              <div className="row m-2 align-items-center shadow bg-white rounded-3 py-3">
                <div className="col-sm-5">
                  <img src={primaria} className="img-fluid rounded-1" />
                </div>
                <div className="col-sm-7">
                  <h3 className="fs-5 fw-bolder">NIVEL PRIMARIO</h3>
                  <p>FORMACION GENERAL
                    <br></br>
                    PROPUESTA CURRICULAR COMPLEMENTARIA (DOBLE JORNADA)
                    ⦁	Enriquecer las fortalezas para la construcción de aprendizajes.
         ⦁	Aportar herramientas que permitan a través del diseño curricular del nivel, potenciar el aprendizaje singular de cada alumno/a.
⦁	Brindar estrategias comunicativas que permitan construir aprendizajes cada vez más autónomos.
⦁	Propiciar el conocimiento en las distintas áreas curriculares con las particularidades que posibilita la modalidad.
⦁	Aportar una mirada trasversal que posibilite el desarrollo integral de cada niño y niña desde una perspectiva de la educación sexual integral.
⦁	Ofrecer espacios de conocimiento y reconocimiento de aspectos sociales con su transformación social en el tiempo y el espacio.
⦁	Permitir aspectos exploratorios y de conocimiento científico sobre el ambiente y la naturaleza.

                    </p>
                </div>
              </div>
              <div className="row m-2 align-items-center shadow bg-white rounded-3 py-3">
                <div className="col-sm-5">

                  <img src={proyecto2} className="img-fluid rounded-1" />

                </div>
                <div className="col-sm-7">
                  <h3> CFI</h3>
                  <p>
                    <li>FORMACION TECNICA ,DOBLE JORNADA</li>
                    <li>FORMACION GENERAL, DOBLE JORNADA</li>
                    <li>SERVICIO DEL COMEDOR</li>
                    ⦁	Posibilitar la propuesta de enseñanza basada en el diseño curricular, dirigida a las y los estudiantes, esperando que, a través de la mediación docente, puedan contribuir a la interacción, conversación y, fundamentalmente, construcción de conocimientos.
⦁	Asegurar el desarrollo de trayectorias educativas en continuidad con el NivelPrimario,
tanto en la Modalidad como en las escuelas del Nivel, la progresión y diversidad de la
enseñanza.
⦁	Garantizar las trayectorias educativas de adolescentes y jóvenes con discapacidad en unmarco de articulación con los niveles y las modalidades provinciales.
Brindar una formación que posibilite a las y los estudiantes con discapacidad el desarrollo
de sus proyectos de vida.
⦁	Ofrecer espacios de participación juvenil y construcción de ciudadanía.
⦁	Beneficiar la reflexión y la adquisición de herramientas que permitan la mayor autonomía posible.
⦁	Ampliar las posibilidades del uso de recursos tecnológicos como beneficiosos para la autonomía y el desarrollo integral.


                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );

}
export default SeccionProyectos;

