import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Table } from 'react-bootstrap';

const UsuariosCRUD = () => {
  const [usuarios, setNoticias] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    rol: "",
    id_usuario: "",
  });
  const [editando, setEditando] = useState(null);
  const [viendo, setViendo] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000/api/usuarios";

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get(API_URL);
      setNoticias(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      setLoading(false);
    }
  };


  const crear = async () => {
    try {
      await axios.post(API_URL, form);
      setForm({ nombre: "", email: "", rol: "" });
      fetchUsuarios();
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };


  const editar = (usuario) => {
    setEditando(usuario.id);
    setForm({
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,

    });
  };


  const guardar = async () => {
    try {
      await axios.put(`${API_URL}/${editando}`, form);
      setEditando(null);
      setForm({ nombre: "", email: "", rol: "" });
      fetchUsuarios();
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };


  const eliminar = async (id) => {
    if (window.confirm("¿Seguro que querés eliminar esta usuario?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchUsuarios();
      } catch (error) {
        console.error("Error al eliminar usuario:", error);
      }
    }
  };


  const ver = (usuario) => {
    setViendo(usuario);
  };


  const cerrarModal = () => {
    setViendo(null);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Gestión de Usuarios</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>{editando ? "Editar Usuario" : "Nuevo Usuario"}</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Rol"
          value={form.rol}
          onChange={(e) => setForm({ ...form, rol: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
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
              setForm({ nombre: "", email: "", rol: "" });
            }}
            style={{ marginLeft: "10px", padding: "5px 10px" }}
          >
            Cancelar
          </button>
        )}
      </div>

      {loading ? (
        <p>Cargando usuarios...</p>
      ) : usuarios.length === 0 ? (
        <p>No hay usuarios disponibles.</p>
      ) : (
        <Table responsive striped bordered hover>
          <thead style={{ backgroundColor: "#f0f0f0" }}>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>

                <td>
                  <button onClick={() => ver(usuario)} style={{ padding: "5px 10px", marginRight: "5px" }}>
                    Ver
                  </button>
                  <button
                    onClick={() => editar(usuario)}
                    style={{ marginRight: "10px", padding: "5px 10px" }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminar(usuario.id)}
                    style={{ backgroundColor: "red", color: "#fff", padding: "5px 10px" }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </Table>
      )}
      {viendo && (
        <div className="modal-overlay">
         <div className="modal-content-custom">
            <h3>{viendo.nombre}</h3>
            <p><strong>Email:</strong> {viendo.email}</p>
            <p><strong>Rol:</strong> {viendo.rol}</p>
            
            <button onClick={cerrarModal} style={{ marginTop: "10px", padding: "5px 10px" }}>
              Cerrar
            </button>
          </div>
        </div>
      )}


    </div>

  );
};

export default UsuariosCRUD;
