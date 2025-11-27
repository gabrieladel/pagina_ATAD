import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "./Crud.css";


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

  const API_URL = "https://paginaatad-production.up.railway.app/api/contactos";

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
    <div className="crud">
      <h2>Gestión de Contactos</h2>
      
      {loading ? (
        <p>Cargando contactos...</p>
      ) : contactos.length === 0 ? (
        <p>No hay contactos disponibles.</p>
      ) : (
        <Table responsive striped bordered hover>
          <thead>
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
                  <Button onClick={() => ver(contacto)}variant="outline-primary">
                    Ver
                  </Button>
              
                  <Button
                    onClick={() => eliminar(contacto.id)}
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
            <p><strong>Telefono:</strong> {viendo.telefono}</p>
            <p><strong>Email:</strong> {viendo.email}</p>
            <p><strong>Mensaje:</strong> {viendo.mensaje}</p>
           <Button variant="outline-secondary" onClick={cerrarModal} >Cerrar</Button>
          </div>
        </div>
      )}
    </div>
          
  );
};

export default ContactosCRUD;
