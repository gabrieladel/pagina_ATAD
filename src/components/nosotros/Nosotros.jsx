import "./Nosotros.css";
import imagen from "../../assets/images/ATAD-In.jpg";
import imagen_atdi from "../../assets/images/atdi_img.jpg";
import imgLog from "../../assets/images/logoAtad.jpg";

export default function Nosotros() {
  return (
    <>
      <section id="nosotros">
        <div className="conteiner">
          <div className="conteiner-text">
            <img src={imgLog} className="log" />
            <h1>ATAD</h1>
            <h5>Asociación Tandilense de Ayuda al Discapacitado </h5>
            <p>ESCUELA DE EDUCACION ESPECIAL DIEGEP N 1963</p>
            <h6>Abarca los niveles: </h6>
            <ul>
              <li>*Inicial</li>
              <li>*Primario</li>
              <li>*CFI</li>
            </ul>
            <a href="#proyectos" className="btn btn-primary btn-lg">
              Nuestros Proyectos
            </a>
          </div>
          <div className="conteiner-2">
            <div className="imagen1">
              <img src={imagen} alt="ATAD" width="390" height="230" />
            </div>
            <div className="card border-0">
              <img
                src={imagen_atdi}
                alt="ATDI"
                className="card-img-top rounded-0"
                width="360"
                height="230"
              />
              <div className="card-body">
                <h5 className="card-title">ATDI</h5>
                <p className="card-text">
                  Atención temprana del desarrollo infantil (45 dias a 3 años).
                </p>
                <a href="#" className="btn btn-primary">
                  Para mas info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
