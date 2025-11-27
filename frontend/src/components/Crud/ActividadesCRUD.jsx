import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Crud.css";

const ActividadesCRUD = () => {
 const [actividades, setActividades] = useState([]);
  const [form, setForm] = useState({ 
    titulo: "", 
    contenido: "", 
    fecha: "",
    id_usuario: "",
  });
  const [editando, setEditando] = useState(null);
  const [viendo, setViendo] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://paginaatad-production.up.railway.app/api/actividades";

  const fetchActividades = async () => {
    try {
      const response = await axios.get(API_URL);
      setActividades(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener actividades:", error);
      setLoading(false);
    }
  };

  const crear = async () => {
    try {
      await axios.post(API_URL, form);
      setForm({ titulo: "", contenido: "", fecha: "", id_usuario: ""});
      fetchActividades();
    } catch (error) {
      console.error("Error al crear Actividad:", error);
    }
  };

  const editar = (Actividad) => {
    setEditando(Actividad.id);
    setForm({ 
      titulo: Actividad.titulo,
      contenido: Actividad.contenido, 
      fecha: Actividad.fecha ? Actividad.fecha.split("T")[0] : "",
      id_usuario: Actividad.id_usuario || "",
    });
  };

  const guardar = async () => {
    try {
      await axios.put(`${API_URL}/${editando}`, form);
      setEditando(null);
      setForm({ titulo: "", contenido: "", fecha: "", id_usuario: ""  });
      fetchActividades();
    } catch (error) {
      console.error("Error al actualizar Actividad:", error);
    }
  };

  const eliminar = async (id) => {
    if (window.confirm("¿Seguro que querés eliminar esta Actividad?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchActividades();
      } catch (error) {
        console.error("Error al eliminar Actividad:", error);
      }
    }
  };

  const ver = (Actividad) => {
    setViendo(Actividad);
  };

  const cerrarModal = () => {
    setViendo(null);
  };

  useEffect(() => {
    fetchActividades();
  }, []);

  return (
    <div className="crud">
      <h2>Gestión de Actividades</h2>

      <div className="crud-b">
        <h3>{editando ? "Editar Actividad" : "Nueva Actividad"}</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text>Título</InputGroup.Text>
          <Form.Control
            type="text"
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Contenido</InputGroup.Text>
          <Form.Control
            as="textarea"
            value={form.contenido}
            onChange={(e) => setForm({ ...form, contenido: e.target.value })}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Fecha</InputGroup.Text>
          <Form.Control
            type="date"
            value={form.fecha}
            onChange={(e) => setForm({ ...form, fecha: e.target.value })}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Usuario</InputGroup.Text>
          <Form.Control
            type="number"
            value={form.id_usuario}
            onChange={(e) => setForm({ ...form, id_usuario: e.target.value })}
          />
        </InputGroup>
        {editando ? (
          <Button onClick={guardar} variant="outline-success">
            Guardar
          </Button>
        ) : (
          <Button onClick={crear} variant="outline-warning">
          Agregar
          </Button>
        )}

        {editando && (
          <Button
           variant="outline-danger"
            onClick={() => {
              setEditando(null);
              setForm({ titulo: "", contenido: "", fecha: "", id_usuario: "" });
            }} 
          >
            Cancelar
          </Button>
        )}
      </div>

      {loading ? (
        <p>Cargando actividades...</p>
      ) : actividades.length === 0 ? (
        <p>No hay actividades disponibles.</p>
      ) : (
        <Table responsive striped bordered hover>
          <thead>
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
            {actividades.map((Actividad) => (
              <tr key={Actividad.id}>
                <td>{Actividad.id}</td>
                <td>{Actividad.titulo}</td>
                <td>{Actividad.contenido}</td>
                <td>
                  {new Date(Actividad.fecha).toLocaleDateString("es-AR")}
                </td>
                  <td>{Actividad.usuario ? Actividad.usuario.nombre : "—"}</td>
                <td>
                  <Button onClick={() => ver(Actividad)} variant="outline-primary">
Ver
                  </Button>
                  <Button
                    onClick={() => editar(Actividad)}
                    variant="outline-success"> Editar
                  </Button>
                  <Button
                    onClick={() => eliminar(Actividad.id)}
                   variant="outline-danger">
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {viendo && (
     <div className="viendo">
          <div className="viendo-2">
            <h3>{viendo.titulo}</h3>
            <p><strong>Contenido:</strong> {viendo.contenido}</p>
            <p><strong>Fecha:</strong> {new Date(viendo.fecha).toLocaleDateString("es-AR")}</p>
            <p><strong>Usuario:</strong> {viendo.usuario ? viendo.usuario.nombre : "—"}</p>
           <Button variant="outline-secondary" onClick={cerrarModal} >Cerrar</Button>
          </div>
        </div>
      )}
    </div>
          
  );
};

export default ActividadesCRUD;
