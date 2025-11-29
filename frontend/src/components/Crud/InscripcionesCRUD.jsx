import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "./Crud.css";


const InscripcionesCRUD = () => {
  const [inscripciones, setInscripciones] = useState([]);
  const [form, setForm] = useState({ 
    nombre: "", 
    telefono: "", 
    email: "",
    mensaje: "",
  });
 
  const [viendo, setViendo] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://paginaatad-production.up.railway.app/api/inscripciones";

  const fetchInscripciones = async () => {
    try {
      const response = await axios.get(API_URL);
      setInscripciones(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener inscripciones:", error);
      setLoading(false);
    }
  };

  const guardar = async () => {
    try {
      await axios.put(`${API_URL}/${editando}`, form);
      setEditando(null);
      setForm({ nombre: "", telefono: "", email: "", mensaje: ""  });
      fetchInscripciones();
    } catch (error) {
      console.error("Error al actualizar inscripcion:", error);
    }
  };

  const eliminar = async (id) => {
    if (window.confirm("¿Seguro que querés eliminar esta inscripcion?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchInscripciones();
      } catch (error) {
        console.error("Error al eliminar inscripcion:", error);
      }
    }
  };

  const ver = (inscripcion) => {
    setViendo(inscripcion);
  };

  const cerrarModal = () => {
    setViendo(null);
  };

  useEffect(() => {
    fetchInscripciones();
  }, []);

  return (
    <div className="crud">
      <h2>Gestión de Inscripciones</h2>
      
      {loading ? (
        <p>Cargando inscripciones...</p>
      ) : inscripciones.length === 0 ? (
        <p>No hay inscripciones disponibles.</p>
      ) : (
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>EDAD</th>
              <th>FECHA DE NACIMIENTO</th>
              <th>DNI</th>
              <th>DOMICILIO</th>
              <th>NIVEL</th>
              <th>PREPAGA</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {inscripciones.map((inscripcion) => (
              <tr key={inscripcion.id}>
                <td>{inscripcion.id}</td>
                <td>{inscripcion.nombre}</td>
                <td>{inscripcion.apellido}</td>
                <td>{inscripcion.edad}</td>
                <td>{inscripcion.fecha_nacimiento}</td>
                <td>{inscripcion.dni}</td>
                <td>{inscripcion.domicilio}</td>
                <td>{inscripcion.id_nivel}</td>
                <td>{inscripcion.id_prepaga}</td>
                <td>
                  <Button onClick={() => ver(inscripcion)}variant="outline-primary">
                    Ver
                  </Button>
              
                  <Button
                    onClick={() => eliminar(inscripcion.id)}
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
            <h3>{viendo.nombre}</h3>
            <p><strong>Nombre:</strong> {viendo.nombre}</p>
            <p><strong>Apellido:</strong> {viendo.apellido}</p>
            <p><strong>Edad:</strong> {viendo.edad}</p>
            <p><strong>Fecha de nacimiento:</strong> {viendo.fecha_nacimiento}</p>
            <p><strong>Dni:</strong> {viendo.dni}</p>
            <p><strong>Domicio:</strong> {viendo.domicilio}</p>
            <p><strong>Nivel:</strong> {viendo.id_nivel}</p>
            <p><strong>Prepaga:</strong> {viendo.id_prepaga}</p>
           <Button variant="outline-secondary" onClick={cerrarModal} >Cerrar</Button>
          </div>
        </div>
      )}
    </div>
          
  );
};

export default InscripcionesCRUD;
