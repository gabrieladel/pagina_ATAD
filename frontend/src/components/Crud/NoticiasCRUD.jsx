import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
import "./Crud.css";



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
      setForm({ titulo: "", contenido: "", fecha: "", id_usuario: "" });
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
      setForm({ titulo: "", contenido: "", fecha: "", id_usuario: "" });
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
    <div className="crud">
      <h2>Gestión de Noticias</h2>
      <div className="crud-b">
        <h3>{editando ? "Editar Noticia" : "Nueva Noticia"}</h3>
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
            className="ms-2"
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
        <p>Cargando noticias...</p>
      ) : noticias.length === 0 ? (
        <p>No hay noticias disponibles.</p>
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
            {noticias.map((noticia) => (
              <tr key={noticia.id}>
                <td>{noticia.id}</td>
                <td>{noticia.titulo}</td>
                <td>{noticia.contenido}</td>
                <td>
                  {new Date(noticia.fecha).toLocaleDateString("es-AR")}
                </td>
                <td>{noticia.usuario ? noticia.usuario.nombre : "—"}</td>
                <td>
                  <Button onClick={() => ver(noticia)} variant="outline-primary">
                    Ver
                  </Button>
                  <Button onClick={() => editar(noticia)} variant="outline-success">Editar</Button>

                  <Button
                    onClick={() => eliminar(noticia.id)}
                    variant="outline-danger"

                  >
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

export default NoticiasCRUD;
