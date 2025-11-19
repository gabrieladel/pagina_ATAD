import React, { useEffect, useState, useRef } from "react";
import "./ActividadesTimeline.css";

function ActividadesTimeline() {
  const [actividades, setActividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const timelineRef = useRef(null);

  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/actividades");
        const data = await res.json();
        setActividades(data);
      } catch (error) {
        console.error("Error cargando actividades:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActividades();
  }, []);

  // --- BOTONES DE DESPLAZAMIENTO ---
  const scrollLeft = () => {
    timelineRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    timelineRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (loading) return <p>Cargando línea de tiempo...</p>;
  if (!actividades.length) return <p>No hay actividades disponibles.</p>;

  return (
    <div className="timeline-wrapper">
      
      {/* Botón IZQUIERDA */}
      <button className="scroll-btn left" onClick={scrollLeft}>
        ❮
      </button>

      {/* Contenedor scroll */}
      <div className="timeline-horizontal-container" ref={timelineRef}>
        <div className="timeline-horizontal">
          {actividades.map((act, index) => (
            <div className="timeline-horizontal-item" key={index}>
              <div className="circle"></div>
              <div className="content">
                <h3>{act.titulo}</h3>
                <p>{act.contenido}</p>
                <span className="date">
                  {new Date(act.fecha).toLocaleDateString("es-AR")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón DERECHA */}
      <button className="scroll-btn right" onClick={scrollRight}>
        ❯
      </button>
    </div>
  );
}

export default ActividadesTimeline;


