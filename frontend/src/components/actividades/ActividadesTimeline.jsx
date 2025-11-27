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

  if (loading) return <p>Cargando línea de tiempo...</p>;
  if (!actividades.length) return <p>No hay actividades disponibles.</p>;

  return (
    <div className="timeline-wrapper-minimal">
      <div className="timeline-horizontal-container" ref={timelineRef}>
        <div className="timeline-line"></div>

        <div className="timeline-horizontal">
          {actividades.map((act, index) => (
            <div className="timeline-item" key={index}>
              <div className="circle"></div>

              <div className="card">
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
    </div>
  );
}

export default ActividadesTimeline;







