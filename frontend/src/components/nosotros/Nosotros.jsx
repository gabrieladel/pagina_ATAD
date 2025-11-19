import "./Nosotros.css";
import imagen from "../../assets/images/ATAD-In.jpg";
import imgLog from "../../assets/images/logoAtad.jpg";
import PortalExample from "../Modal/PortalExample";
import { useState } from "react";

export default function Nosotros() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="nosotros" className="nosotros-section">

      {/* --- BANNER PRINCIPAL --- */}
      <div className="banner-container">
        <img src={imagen} className="banner-foto" alt="Institución ATAD" />

        {/* CAPA OSCURA */}
        <div className="banner-overlay"></div>

        {/* TEXTO ENCIMA */}
        <div className="banner-text">
          <img src={imgLog} className="banner-logo" alt="Logo ATAD" />

          <h1>Asociación Tandilense de Ayuda al Discapacitado</h1>
          <h3>ESCUELA DE EDUCACIÓN ESPECIAL DIEGEP N° 1963</h3>

          <p className="niveles">
            Abarca los niveles: <strong>ATDI – Inicial – Primario – CFI</strong>
          </p>

          <button className="banner-btn" onClick={() => setIsOpen(true)}>
            Conocer Historia
          </button>
        </div>
      </div>

      {/* --- MODAL --- */}
      {isOpen && (
        <PortalExample onClose={() => setIsOpen(false)}>
          <h2>Historia de la Institución</h2>
          <p>
            ATAD nació con el compromiso de acompañar, educar y brindar oportunidades
            a personas con discapacidad, promoviendo su desarrollo integral y la 
            inclusión social. A lo largo de los años, la institución ha crecido en 
            infraestructura, programas educativos y proyectos comunitarios, 
            consolidándose como un referente en la región.
          </p>
        </PortalExample>
      )}
    </section>
  );
}











