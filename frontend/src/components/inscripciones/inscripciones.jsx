import { useState } from "react";
import { Form, Button, Alert, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";
import "./inscripciones.css";

// Validación
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const TELEFONO_LONGITUD_REQUERIDA = 10;

const Inscripciones = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    fecha_nacimiento: "",
    dni: "",
    domicilio: "",
    id_nivel: "",
    id_prepaga: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [validated, setValidated] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [customErrors, setCustomErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (customErrors[name]) {
      setCustomErrors({ ...customErrors, [name]: "" });
    }

    if (name === "telefono" || name === "dni" || name === "edad") {
      newValue = value.replace(/\D/g, "");
    }

    setForm({ ...form, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    let validacionManual = true;
    const newCustomErrors = {};

    if (form.email && !EMAIL_REGEX.test(form.email)) {
      newCustomErrors.email = "El email debe tener formato usuario@dominio.com";
      validacionManual = false;
    }

    if (form.telefono && form.telefono.length !== TELEFONO_LONGITUD_REQUERIDA) {
      newCustomErrors.telefono = `El teléfono debe tener exactamente ${TELEFONO_LONGITUD_REQUERIDA} dígitos.`;
      validacionManual = false;
    }

    // Validación bootstrap
    if (formElement.checkValidity() === false || !validacionManual) {
      event.stopPropagation();
      setValidated(true);
      setCustomErrors(newCustomErrors);
      return;
    }

    setValidated(true);
    setCustomErrors({});

    try {
      await axios.post(
        "https://paginaatad-production.up.railway.app/api/inscripciones",
        form
      );

      setEnviado(true);

      setForm({
        nombre: "",
        apellido: "",
        edad: "",
        fecha_nacimiento: "",
        dni: "",
        domicilio: "",
        id_nivel: "",
        id_prepaga: "",
        telefono: "",
        email: "",
        mensaje: "",
      });

      setValidated(false);
    } catch (error) {
      console.error("Error al enviar inscripción:", error);
    }
  };

  return (
    <div className="inscripcion-container">
      <h2>Formulario de Inscripción</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Edad y Fecha de nacimiento */}
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              required
              type="number"
              name="edad"
              value={form.edad}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="8">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              required
              type="date"
              name="fecha_nacimiento"
              value={form.fecha_nacimiento}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* DNI - Domicilio */}
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>dni</Form.Label>
            <Form.Control
              required
              type="text"
              name="dni"
              value={form.dni}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control
              required
              type="text"
              name="domicilio"
              value={form.domicilio}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Nivel y Prepaga */}
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Nivel</Form.Label>
            <Form.Control
              required
              as="select"
              name="id_nivel"
              value={form.id_nivel}
              onChange={handleChange}
            >
              <option value="">ATDI</option>
              <option value="1">Inicial</option>
              <option value="2">Primaria</option>
              <option value="3">CFI</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Prepaga</Form.Label>
            <Form.Control
              required
              as="select"
              name="id_prepaga"
              value={form.id_prepaga}
              onChange={handleChange}
            >
              <option value="">Seleccionar prepaga</option>
              <option value="1">OSDE</option>
              <option value="2">Swiss Medical</option>
              <option value="3">Omint</option>
            </Form.Control>
          </Form.Group>
        </Row>

        {/* Teléfono */}
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              required
              type="text"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              isInvalid={validated && customErrors.telefono}
            />
            <Form.Control.Feedback type="invalid">
              {customErrors.telefono}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                isInvalid={validated && customErrors.email}
              />
              <Form.Control.Feedback type="invalid">
                {customErrors.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        {/* Mensaje */}
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={4}
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Inscripción
        </Button>
      </Form>

      {enviado && (
        <Alert variant="success" className="inscripcion-exito">
          ✅ Inscripción enviada correctamente.
        </Alert>
      )}
    </div>
  );
};

export default Inscripciones;
