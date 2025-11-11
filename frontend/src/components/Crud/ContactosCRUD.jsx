import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactosCRUD = () => {
  const [contactos, setContactos] = useState([]);
  const [form, setForm] = useState({ 
    nombre: "", 
    telefono: "", 
    email: "",
    mensaje: "",
  });
 
  const [viendo, setViendo] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000/api/contactos";

  const fetchContactos = async () => {
    try {
      const response = await axios.get(API_URL);
      setContactos(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener contactos:", error);
      setLoading(false);
    }
  };

  /* const crear = async () => {
    try {
      await axios.post(API_URL, form);
      setForm({ nombre: "", telefono: "", email: "", mensaje: ""});
      fetchContactos();
    } catch (error) {
      console.error("Error al crear contacto:", error);
    }
  }; */

  /* const editar = (contacto) => {
    setEditando(contacto.id);
    setForm({ 
      nombre: contacto.nombre,
      telefono: contacto.telefono, 
      email: contacto.email ? contacto.email.split("T")[0] : "",
      mensaje: contacto.mensaje || "",
    });
  };
 */
  const guardar = async () => {
    try {
      await axios.put(`${API_URL}/${editando}`, form);
      setEditando(null);
      setForm({ nombre: "", telefono: "", email: "", mensaje: ""  });
      fetchContactos();
    } catch (error) {
      console.error("Error al actualizar contacto:", error);
    }
  };

  const eliminar = async (id) => {
    if (window.confirm("¿Seguro que querés eliminar esta contacto?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchContactos();
      } catch (error) {
        console.error("Error al eliminar contacto:", error);
      }
    }
  };

  const ver = (contacto) => {
    setViendo(contacto);
  };

  const cerrarModal = () => {
    setViendo(null);
  };

  useEffect(() => {
    fetchContactos();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Gestión de Contactos</h2>

      {/* <div style={{ marginBottom: "20px" }}>
        <h3>{editando ? "Editar Contacto" : "Nueva Contacto"}</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Telefono"
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          style={{ marginRight: "10px", padding: "5px", width: "300px" }}
        />
 <input
          type="date"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
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
              setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
            }}
            style={{ marginLeft: "10px", padding: "5px 10px" }}
          >
            Cancelar
          </button>
        )}
      </div>
 */}
      {loading ? (
        <p>Cargando contactos...</p>
      ) : contactos.length === 0 ? (
        <p>No hay contactos disponibles.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#f0f0f0" }}>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>TELEFONO</th>
              <th>EMAIL</th>
              <th>MENSAJE</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto) => (
              <tr key={contacto.id}>
                <td>{contacto.id}</td>
                <td>{contacto.nombre}</td>
                <td>{contacto.telefono}</td>
                <td>{contacto.email}</td>
                <td>{contacto.mensaje}</td>
                <td>
                  <button onClick={() => ver(contacto)} style={{ padding: "5px 10px", marginRight: "5px" }}>
                    Ver
                  </button>
                 {/*  <button
                    onClick={() => editar(contacto)}
                    style={{ marginRight: "10px", padding: "5px 10px" }}
                  >
                    Editar
                  </button> */}
                  <button
                    onClick={() => eliminar(contacto.id)}
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
            <h3>{viendo.nombre}</h3>
            <p><strong>Telefono:</strong> {viendo.telefono}</p>
            <p><strong>Email:</strong> {viendo.email}</p>
            <p><strong>Mensaje:</strong> {viendo.mensaje}</p>
            <button onClick={cerrarModal} style={{ marginTop: "10px", padding: "5px 10px" }}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
          
  );
};

export default ContactosCRUD;
