import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/contactos", form);
      setEnviado(true);
      setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar el mensaje.");
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h3 className="mb-3">Comunicate con nosotros</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Ingrese su teléfono"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ingrese su email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Escriba su mensaje"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>

        {enviado && (
          <p className="text-success mt-3">✅ Mensaje enviado correctamente.</p>
        )}
        {error && <p className="text-danger mt-3">{error}</p>}
      </Form>
    </div>
  );
}

export default Contacto;

