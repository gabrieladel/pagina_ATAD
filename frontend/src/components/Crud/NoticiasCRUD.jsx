import React, { useEffect, useState } from "react";
import axios from "axios";

const NoticiasCRUD = () => {
  const [noticias, setNoticias] = useState([]);
  const [form, setForm] = useState({ 
    titulo: "", 
    contenido: "", 
    fecha: "",
    id_usuario: "",
  });
  const [editando, setEditando] = useState(null);
  const [viendo, setViendo] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000/api/noticias";

  const fetchNoticias = async () => {
    try {
      const response = await axios.get(API_URL);
      setNoticias(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener noticias:", error);
      setLoading(false);
    }
  };

  const crear = async () => {
    try {
      await axios.post(API_URL, form);
      setForm({ titulo: "", contenido: "", fecha: "", id_usuario: ""});
      fetchNoticias();
    } catch (error) {
      console.error("Error al crear noticia:", error);
    }
  };

  const editar = (noticia) => {
    setEditando(noticia.id);
    setForm({ 
      titulo: noticia.titulo,
      contenido: noticia.contenido, 
      fecha: noticia.fecha ? noticia.fecha.split("T")[0] : "",
      id_usuario: noticia.id_usuario || "",
    });
  };

  const guardar = async () => {
    try {
      await axios.put(`${API_URL}/${editando}`, form);
      setEditando(null);
      setForm({ titulo: "", contenido: "", fecha: "", id_usuario: ""  });
      fetchNoticias();
    } catch (error) {
      console.error("Error al actualizar noticia:", error);
    }
  };

  const eliminar = async (id) => {
    if (window.confirm("¿Seguro que querés eliminar esta noticia?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchNoticias();
      } catch (error) {
        console.error("Error al eliminar noticia:", error);
      }
    }
  };

  const ver = (noticia) => {
    setViendo(noticia);
  };

  const cerrarModal = () => {
    setViendo(null);
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Gestión de Noticias</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>{editando ? "Editar Noticia" : "Nueva Noticia"}</h3>
        <input
          type="text"
          placeholder="Título"
          value={form.titulo}
          onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Contenido"
          value={form.contenido}
          onChange={(e) => setForm({ ...form, contenido: e.target.value })}
          style={{ marginRight: "10px", padding: "5px", width: "300px" }}
        />
 <input
          type="date"
          placeholder="Fecha"
          value={form.fecha}
          onChange={(e) => setForm({ ...form, fecha: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Usuario"
          value={form.id_usuario}
          onChange={(e) => setForm({ ...form, id_usuario: e.target.value })}
          style={{ marginRight: "10px", padding: "5px", width: "120px" }}
        />
        {editando ? (
          <button onClick={guardar} style={{ backgroundColor: "orange", padding: "5px 10px" }}>
            Guardar
          </button>
        ) : (
          <button onClick={crear} style={{ backgroundColor: "green", color: "#fff", padding: "5px 10px" }}>
            Agregar
          </button>
        )}

        {editando && (
          <button
            onClick={() => {
              setEditando(null);
              setForm({ titulo: "", contenido: "", fecha: "", id_usuario: "" });
            }}
            style={{ marginLeft: "10px", padding: "5px 10px" }}
          >
            Cancelar
          </button>
        )}
      </div>

      {loading ? (
        <p>Cargando noticias...</p>
      ) : noticias.length === 0 ? (
        <p>No hay noticias disponibles.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#f0f0f0" }}>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Contenido</th>
              <th>Fecha</th>
              <th>Usuario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {noticias.map((noticia) => (
              <tr key={noticia.id}>
                <td>{noticia.id}</td>
                <td>{noticia.titulo}</td>
                <td>{noticia.contenido}</td>
                <td>
                  {new Date(noticia.fecha_publicacion).toLocaleDateString("es-AR")}
                </td>
                  <td>{noticia.usuario ? noticia.usuario.nombre : "—"}</td>
                <td>
                  <button onClick={() => ver(noticia)} style={{ padding: "5px 10px", marginRight: "5px" }}>
                    Ver
                  </button>
                  <button
                    onClick={() => editar(noticia)}
                    style={{ backgroundColor: "orange", marginRight: "10px", padding: "5px 10px" }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminar(noticia.id)}
                    style={{ backgroundColor: "red", color: "#fff", padding: "5px 10px" }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    
      {viendo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <h3>{viendo.titulo}</h3>
            <p><strong>Contenido:</strong> {viendo.contenido}</p>
            <p><strong>Fecha:</strong> {new Date(viendo.fecha).toLocaleDateString("es-AR")}</p>
            <p><strong>Usuario:</strong> {viendo.usuario ? viendo.usuario.nombre : "—"}</p>
            <button onClick={cerrarModal} style={{ marginTop: "10px", padding: "5px 10px" }}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
          
  );
};

export default NoticiasCRUD;
