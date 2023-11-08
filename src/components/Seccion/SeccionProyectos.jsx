import "./SeccionProyectos.css";
import proyecto1 from "../../assets/images/proyecto1.jpg";

function SeccionProyectos() {
  return (
  <>
    <div className="titulo">
      <h2>PROPUESTAS EDUCATIVAS</h2>
    </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={proyecto1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">NIVEL INICIAL</h5>
                <p className="card-text ">La modalidad de Educación Especial asume actualmente como posicionamiento político-pedagógico la centralidad de la enseñanza, la igualdad como punto de partida, el derecho político a las diferencias y la inclusión educativa como política de Estado”.
                </p>
                <ul className="barralateral">
                  <li>Trabajar de manera corresponsable con las instituciones de nivel. </li>
                  <li>Propiciar el reconocimiento cultural de las familias que conforman la sala y la institución de modalidad.</li>
                  <li>Posibilitar el acceso cada vez más autónomo a los aprendizajes.</li>
                  <li>Favorecer el desarrollo integral de las infancias brindando seguridad y confianza, en un clima de hospitalidad, afecto y comprensión que promueva el avance en todos sus aprendizajes. </li>
                  <li>Promover y garantizar el derecho a la educación de niñas y niños con discapacidad</li>
                  <li>Actuar en pos del cuidado integral de niñas y niños .</li>
                </ul>
              </div>

            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">NIVEL PRIMARIO</h5>
                <p className="card-text ">PRIMARIA: - FORMACION GENERAL<br>PROPUESTA CURRICULAR COMPLEMENTARIA, DOBLE JORNADA</br></p>
                <ul className="barralateral">
                  <li>Enriquecer las fortalezas para la construcción de aprendizajes.</li>
                  <li>Aportar herramientas que permitan a través del diseño curricular del nivel, potenciar el aprendizaje singular de cada alumno/a.</li>
                  <li>Brindar estrategias comunicativas que permitan construir aprendizajes cada vez más autónomos</li>
                  <li>Propiciar el conocimiento en las distintas áreas curriculares con las particularidades que posibilita la modalidad</li>
                  <li>Aportar una mirada trasversal que posibilite el desarrollo integral de cada niño y niña desde una perspectiva de la educación sexual integral.</li>
                  <li>Ofrecer espacios de conocimiento y reconocimiento de aspectos sociales con su transformación social en el tiempo y el espacio.</li>
                </ul>
              </div>

            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">CFICENTRO DE FORMACION INTEGRAL:<ul><li>FORMACION TECNICA ,DOBLE JORNADA</li>
                                                                          <li>FORMACION GENERAL, DOBLE JORNADA</li>
                                                                          <li>SERVICIO DEL COMEDOR</li></ul></h5>
                <p className="card-text "><ul>
                  <li>Posibilitar la propuesta de enseñanza basada en el Diseño Curricular, dirigida a las y los estudiantes, esperando que, a traves de la mediacion  docente, puedan contribuir a la interaccion, conversacion y, fundamentalmente, construccion de conocimientos. </li>
                  <li>Asegurar el desarrollo de trayectorias educativas en continuidad con el NivelPrimario,tanto en la Modalidad como en las escuelas del Nivel, la progresión y diversidad de la
enseñanza</li>
                  <li>Garantizar las trayectorias educativas de adolescentes y jóvenes con discapacidad en unmarco de articulación con los niveles y las modalidades provinciales.
Brindar una formación que posibilite a las y los estudiantes con discapacidad el desarrollo de sus proyectos de vida.</li>
<li>Ofrecer espacios de participación juvenil y construcción de ciudadanía.</li>
<li>Beneficiar la reflexión y la adquisición de herramientas que permitan la mayor autonomía posible</li>
<li>Ampliar las posibilidades del uso de recursos tecnológicos como beneficiosos para la autonomía y el desarrollo integral.</li>
</ul></p>
                                                                        
              </div>

            </div>
          </div>
          </div>
  </>
 );

 }
  
export default SeccionProyectos;
