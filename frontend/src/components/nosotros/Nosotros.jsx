import "./Nosotros.css";
import imagen from "../../assets/images/ATAD-In.jpg";
import imgLog from "../../assets/images/logoAtad.jpg";
import PortalExample from "../Modal/PortalExample";

export default function Nosotros() {
  return (
    <>
      <section id="nosotros">
        <div className="conteiner">
          <div className="conteiner-text">
            <img src={imgLog} className="log" />
            <h1>ATAD</h1>
            <h5>Asociación Tandilense de Ayuda al Discapacitado </h5>
            <p>ESCUELA DE EDUCACION ESPECIAL DIEGEP N 1963.</p>
            <h6>Abarca los niveles:</h6>
            <div className="niveles">
              <button className="content-inicial">Inicial</button>
              <button className="content-primaria">Primario</button>
              <button className="content-cfi">CFI</button>
            </div>
            {/* <a href="#proyectos" className="btn btn-primary btn-sm m-5">
              Nuestros Proyectos
            </a> */}
          </div>
          <div className="conteiner-2">
            <div className="imagen1">
              <img src={imagen} alt="ATAD" width="390" height="230" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
