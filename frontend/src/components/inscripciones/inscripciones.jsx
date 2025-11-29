import { useState, useEffect } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./inscripciones.css";

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
  });

  const [validated, setValidated] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // Datos de BD
  const [niveles, setNiveles] = useState([]);
  const [prepagas, setPrepagas] = useState([]);

  // Cargar niveles y prepagas desde backend
  useEffect(() => {
    axios
      .get("https://paginaatad-production.up.railway.app/api/niveles")
      .then((res) => setNiveles(res.data))
      .catch((err) => console.error("Error cargando niveles:", err));

    axios
      .get("https://paginaatad-production.up.railway.app/api/prepagas")
      .then((res) => setPrepagas(res.data))
      .catch((err) => console.error("Error cargando prepagas:", err));
  }, []);

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;
    if (name === "dni" || name === "edad") {
      newValue = value.replace(/\D/g, ""); // solo números
    }

    setForm({ ...form, [name]: newValue });
  };

  // Enviar formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;

    if (formElement.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);

    try {
      await axios.post(
       "https://paginaatad-production.up.railway.app/api/inscripciones", form);

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
        {/* Nombre y Apellido */}
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
            <Form.Label>DNI</Form.Label>
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
              type="number"
              value={form.id_nivel}
              onChange={handleChange}
            >
              <option value="">Seleccione nivel</option>
              {niveles.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.nombre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Prepaga</Form.Label>
            <Form.Control
              required
              as="select"
              name="id_prepaga"
              type="number"
              value={form.id_prepaga}
              onChange={handleChange}
            >
              <option value="">Seleccione prepaga</option>
              {prepagas.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nombre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      {enviado && (
        <Alert variant="success">✅ Inscripción enviada correctamente.</Alert>
      )}
    </div>
  );
};

export default Inscripciones;
