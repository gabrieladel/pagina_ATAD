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
        </div>
      </div>
    </section>
  );
}











